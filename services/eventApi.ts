import axios from 'axios';
import { mockAttendees, mockEvents, mockReservations } from '../data/mockData';
import type { Attendee, EventItem, Reservation } from '../types/event';

const api = axios.create({
  baseURL: '/api',
  timeout: 600,
});

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const withDelay = async <T>(value: T): Promise<T> => {
  await wait(250);
  return value;
};

export const eventApi = {
  getEvents: async (): Promise<EventItem[]> => {
    const response = await api.get('/events');
    return withDelay((response.data?.events ?? mockEvents) as EventItem[]);
  },
  getEventById: async (id: number): Promise<EventItem | undefined> => {
    const response = await api.get('/events');
    const events = (response.data?.events ?? mockEvents) as EventItem[];
    return withDelay(events.find((event) => event.id === id));
  },
  createEvent: async (payload: Omit<EventItem, 'id' | 'registeredAttendees'>): Promise<EventItem> => {
    const response = await api.post('/events', payload);
    return withDelay({
      ...(response.data?.event ?? payload),
      id: Date.now(),
      registeredAttendees: 0,
    } as EventItem);
  },
  updateEvent: async (id: number, payload: Partial<EventItem>): Promise<EventItem> => {
    const response = await api.put(`/events/${id}`, payload);
    return withDelay({
      ...(response.data?.event ?? payload),
      id,
    } as EventItem);
  },
  deleteEvent: async (id: number): Promise<number> => {
    await api.delete(`/events/${id}`);
    return withDelay(id);
  },
  getAttendees: async (): Promise<Attendee[]> => {
    const response = await api.get('/attendees');
    return withDelay((response.data?.attendees ?? mockAttendees) as Attendee[]);
  },
  getReservations: async (): Promise<Reservation[]> => {
    const response = await api.get('/reservations');
    return withDelay((response.data?.reservations ?? mockReservations) as Reservation[]);
  },
  createReservation: async (reservation: Omit<Reservation, 'id'>): Promise<Reservation> => {
    const response = await api.post('/reservations', reservation);
    return withDelay({
      ...(response.data?.reservation ?? reservation),
      id: Date.now(),
    } as Reservation);
  },
  updateReservation: async (id: number, payload: Partial<Reservation>): Promise<Reservation> => {
    const response = await api.put(`/reservations/${id}`, payload);
    return withDelay({
      ...(response.data?.reservation ?? payload),
      id,
    } as Reservation);
  },
  deleteReservation: async (id: number): Promise<number> => {
    await api.delete(`/reservations/${id}`);
    return withDelay(id);
  },
};

export { api, mockEvents, mockAttendees, mockReservations };
