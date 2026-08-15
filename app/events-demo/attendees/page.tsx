'use client';

import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { StatusBadge } from '../../../components/events/StatusBadge';
import { useEventData } from '../../../hooks/useEventData';

const perPage = 8;

export default function AttendeeManagementPage() {
  const { attendees, loading, error } = useEventData();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const next = attendees.filter((attendee) => {
      const matchesQuery = [attendee.name, attendee.email, attendee.eventName].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'All' || attendee.reservationStatus === statusFilter;
      return matchesQuery && matchesStatus;
    });

    return next.sort((a, b) => new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime());
  }, [attendees, query, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  if (loading) return <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-soft">Loading attendees…</div>;
  if (error) return <div className="rounded-3xl border border-rose-200 bg-rose-50 p-10 text-center text-rose-700 shadow-soft">{error}</div>;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">Operations</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Attendee management</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-[1.4fr_0.8fr]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search attendees or events" className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 focus:border-indigo-500 focus:outline-none" />
          </label>

          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none">
            <option value="All">All reservations</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Waitlisted">Waitlisted</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Attendee</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Event</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Reservation</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Payment</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Attendance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {paginated.length === 0 ? (
                <tr><td colSpan={5} className="px-5 py-12 text-center text-slate-500">No attendees match the active filters.</td></tr>
              ) : (
                paginated.map((attendee) => (
                  <tr key={attendee.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-semibold text-slate-800">{attendee.name}</p>
                        <p className="text-sm text-slate-500">{attendee.email}</p>
                        <p className="text-xs text-slate-500">{attendee.phone}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">{attendee.eventName}</td>
                    <td className="px-5 py-4"><StatusBadge value={attendee.reservationStatus} type="reservation" /></td>
                    <td className="px-5 py-4 text-sm text-slate-600">{attendee.paymentStatus}</td>
                    <td className="px-5 py-4"><StatusBadge value={attendee.attendanceStatus} type="attendance" /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500"><SlidersHorizontal className="h-4 w-4" /> {filtered.length} attendees</div>
        <div className="flex items-center gap-2">
          <button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
          <span className="text-sm font-medium text-slate-700">Page {page} of {totalPages}</span>
          <button onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
