'use client';

import Link from 'next/link';
import { Pencil, Search, Trash2, Eye, ArrowUpDown, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useEventData } from '../../../hooks/useEventData';
import { StatusBadge } from '../../../components/events/StatusBadge';

const perPage = 6;

export default function EventManagementPage() {
  const { events, loading, error, removeEvent } = useEventData();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [sortValue, setSortValue] = useState<'date-asc' | 'date-desc' | 'name'>('date-desc');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const next = events.filter((event) => {
      const matchesQuery = [event.name, event.location, event.organizer, event.category].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'All' || event.status === statusFilter;
      const matchesLocation = locationFilter === 'All' || event.location === locationFilter;
      return matchesQuery && matchesStatus && matchesLocation;
    });

    next.sort((a, b) => {
      if (sortValue === 'name') return a.name.localeCompare(b.name);
      if (sortValue === 'date-asc') return new Date(a.date).getTime() - new Date(b.date).getTime();
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return next;
  }, [events, query, statusFilter, locationFilter, sortValue]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const locations = ['All', ...Array.from(new Set(events.map((event) => event.location)))];

  const deleteEvent = (eventId: number) => {
    removeEvent(eventId);
  };

  if (loading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-soft">Loading events…</div>;
  }

  if (error) {
    return <div className="rounded-3xl border border-rose-300 bg-rose-50 p-10 text-center text-rose-700 shadow-soft">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">Management</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Event management</h1>
        </div>
        <Link href="/events-demo/events/new" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
          + New event
        </Link>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search events, organizers, locations" className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 focus:border-indigo-500 focus:outline-none" />
          </label>

          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none">
            <option value="All">All statuses</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <select value={locationFilter} onChange={(e) => { setLocationFilter(e.target.value); setPage(1); }} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none">
            {locations.map((location) => (
              <option key={location} value={location}>{location === 'All' ? 'All locations' : location}</option>
            ))}
          </select>

          <select value={sortValue} onChange={(e) => setSortValue(e.target.value as 'date-asc' | 'date-desc' | 'name')} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none">
            <option value="date-desc">Newest first</option>
            <option value="date-asc">Oldest first</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Event</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Date</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Location</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Capacity</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Status</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-slate-500">No events match the current filters.</td>
                </tr>
              ) : (
                paginated.map((event) => {
                  const availableSeats = Math.max(event.capacity - event.registeredAttendees, 0);
                  return (
                    <tr key={event.id} className="hover:bg-slate-50">
                      <td className="px-5 py-4">
                        <div>
                          <p className="font-semibold text-slate-800">{event.name}</p>
                          <p className="text-sm text-slate-500">{event.organizer}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600">
                        {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                        <div className="text-xs text-slate-500">{event.startTime} - {event.endTime}</div>
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600">{event.location}</td>
                      <td className="px-5 py-4 text-sm text-slate-600">{event.registeredAttendees}/{event.capacity}<div className="text-xs text-slate-500">{availableSeats} seats left</div></td>
                      <td className="px-5 py-4"><StatusBadge value={event.status} type="event" /></td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Link href={`/events-demo/events/${event.id}`} className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100" aria-label={`View ${event.name}`}><Eye className="h-4 w-4" /></Link>
                          <Link href={`/events-demo/events/${event.id}/edit`} className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100" aria-label={`Edit ${event.name}`}><Pencil className="h-4 w-4" /></Link>
                          <button onClick={() => deleteEvent(event.id)} className="rounded-xl border border-rose-200 bg-rose-50 p-2 text-rose-600 transition hover:bg-rose-100" aria-label={`Delete ${event.name}`}><Trash2 className="h-4 w-4" /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500"><SlidersHorizontal className="h-4 w-4" /> {filtered.length} results</div>
        <div className="flex items-center gap-2">
          <button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
          <span className="text-sm font-medium text-slate-700">Page {page} of {totalPages}</span>
          <button onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
