import { useEffect, useMemo, useState } from 'react';
import { eventApi } from '../services/eventApi';
import type { Attendee, EventItem, Reservation } from '../types/event';

export function useEventData() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    try {
      setLoading(true);
      setError(null);
      const [eventData, attendeeData, reservationData] = await Promise.all([
        eventApi.getEvents(),
        eventApi.getAttendees(),
        eventApi.getReservations(),
      ]);

      setEvents(eventData);
      setAttendees(attendeeData);
      setReservations(reservationData);
    } catch (err) {
      setError('Unable to load event data. Please refresh or try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refresh();
  }, []);

  const stats = useMemo(() => {
    const totalEvents = events.length;
    const upcomingCount = events.filter((event) => event.status === 'Upcoming').length;
    const totalAttendees = events.reduce((sum, event) => sum + event.registeredAttendees, 0);
    const confirmedReservations = reservations.filter((reservation) => reservation.status === 'Confirmed').length;
    const pendingReservations = reservations.filter((reservation) => reservation.status === 'Pending').length;
    const cancelledReservations = reservations.filter((reservation) => reservation.status === 'Cancelled').length;

    return {
      totalEvents,
      upcomingCount,
      totalAttendees,
      confirmedReservations,
      pendingReservations,
      cancelledReservations,
    };
  }, [events, reservations]);

  const upsertEvent = (nextEvent: EventItem) => {
    setEvents((current) => {
      const existing = current.some((event) => event.id === nextEvent.id);
      if (existing) {
        return current.map((event) => (event.id === nextEvent.id ? { ...event, ...nextEvent } : event));
      }
      return [nextEvent, ...current];
    });
  };

  const removeEvent = (eventId: number) => {
    setEvents((current) => current.filter((event) => event.id !== eventId));
    setReservations((current) => current.filter((reservation) => reservation.eventId !== eventId));
    setAttendees((current) => current.filter((attendee) => attendee.eventId !== eventId));
  };

  const updateReservationStatus = (reservationId: number, status: Reservation['status']) => {
    setReservations((current) =>
      current.map((reservation) =>
        reservation.id === reservationId ? { ...reservation, status } : reservation,
      ),
    );
  };

  return {
    events,
    attendees,
    reservations,
    loading,
    error,
    refresh,
    stats,
    upsertEvent,
    removeEvent,
    setAttendees,
    setReservations,
    updateReservationStatus,
  };
}

export type EventDataHook = ReturnType<typeof useEventData>;
