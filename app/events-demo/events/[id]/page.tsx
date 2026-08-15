'use client';

import Link from 'next/link';
import { CalendarDays, MapPin, PencilLine, Trash2, Users, Clock3, ArrowLeft, UserRoundCheck } from 'lucide-react';
import { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useEventData } from '../../../../hooks/useEventData';
import { StatusBadge } from '../../../../components/events/StatusBadge';

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { events, attendees, removeEvent } = useEventData();
  const event = events.find((item) => item.id === Number(params.id));

  const eventAttendees = useMemo(
    () => attendees.filter((attendee) => attendee.eventId === Number(params.id)),
    [attendees, params.id],
  );

  if (!event) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-600 shadow-soft">Event not found.</div>;
  }

  const attendancePercent = Math.min(Math.round((event.registeredAttendees / event.capacity) * 100), 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/events-demo/events" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
          <ArrowLeft className="h-4 w-4" />
          Back to events
        </Link>

        <div className="flex items-center gap-3">
          <Link href={`/events-demo/events/${event.id}/edit`} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            <PencilLine className="h-4 w-4" />
            Edit Event
          </Link>
          <button type="button" onClick={() => { removeEvent(event.id); router.push('/events-demo/events'); }} className="inline-flex items-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-100">
            <Trash2 className="h-4 w-4" />
            Delete Event
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <img src={event.image} alt={event.name} className="h-72 w-full object-cover" />
        <div className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">{event.category}</p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900">{event.name}</h1>
            </div>
            <StatusBadge value={event.status} type="event" />
          </div>

          <p className="mt-4 max-w-3xl text-slate-600">{event.description}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm text-slate-500"><CalendarDays className="h-4 w-4" /> Date</div>
              <p className="mt-2 font-semibold text-slate-800">{new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm text-slate-500"><Clock3 className="h-4 w-4" /> Time</div>
              <p className="mt-2 font-semibold text-slate-800">{event.startTime} - {event.endTime}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" /> Location</div>
              <p className="mt-2 font-semibold text-slate-800">{event.location}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm text-slate-500"><Users className="h-4 w-4" /> Capacity</div>
              <p className="mt-2 font-semibold text-slate-800">{event.registeredAttendees}/{event.capacity}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1.4fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-500">Registration</p>
            <h2 className="text-xl font-semibold text-slate-900">Reservation statistics</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600"><span>Attendance percentage</span><span>{attendancePercent}%</span></div>
              <div className="h-2.5 rounded-full bg-slate-200"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${attendancePercent}%` }} /></div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Confirmed</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{eventAttendees.filter((person) => person.reservationStatus === 'Confirmed').length}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Pending</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{eventAttendees.filter((person) => person.reservationStatus === 'Pending').length}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Waitlisted</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{eventAttendees.filter((person) => person.reservationStatus === 'Waitlisted').length}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Cancelled</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{eventAttendees.filter((person) => person.reservationStatus === 'Cancelled').length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-500">Attendees</p>
            <h2 className="text-xl font-semibold text-slate-900">Guest list</h2>
          </div>

          <div className="space-y-3">
            {eventAttendees.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500">No attendees for this event yet.</div>
            ) : (
              eventAttendees.slice(0, 8).map((attendee) => (
                <div key={attendee.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div>
                    <p className="font-medium text-slate-800">{attendee.name}</p>
                    <p className="text-sm text-slate-500">{attendee.email}</p>
                  </div>
                  <div className="text-right">
                    <StatusBadge value={attendee.reservationStatus} type="reservation" />
                    <p className="mt-2 text-xs text-slate-500">{attendee.attendanceStatus}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
