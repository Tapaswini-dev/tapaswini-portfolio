'use client';

import { Search, SlidersHorizontal, CheckCircle2, XCircle, Clock3 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { StatusBadge } from '../../../components/events/StatusBadge';
import { useEventData } from '../../../hooks/useEventData';

const perPage = 8;

export default function ReservationManagementPage() {
  const { reservations, loading, error, updateReservationStatus } = useEventData();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const next = reservations.filter((reservation) => {
      const matchesQuery = [reservation.attendeeName, reservation.eventName].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'All' || reservation.status === statusFilter;
      return matchesQuery && matchesStatus;
    });

    return next.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [reservations, query, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  if (loading) return <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-soft">Loading reservations…</div>;
  if (error) return <div className="rounded-3xl border border-rose-200 bg-rose-50 p-10 text-center text-rose-700 shadow-soft">{error}</div>;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">Workflow</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Reservation management</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-[1.4fr_0.8fr]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search reservations by attendee or event" className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 focus:border-indigo-500 focus:outline-none" />
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
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Status</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Seats</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Amount</th>
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {paginated.length === 0 ? (
                <tr><td colSpan={6} className="px-5 py-12 text-center text-slate-500">No reservations match the current filters.</td></tr>
              ) : (
                paginated.map((reservation) => (
                  <tr key={reservation.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-semibold text-slate-800">{reservation.attendeeName}</p>
                        <p className="text-sm text-slate-500">{new Date(reservation.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">{reservation.eventName}</td>
                    <td className="px-5 py-4"><StatusBadge value={reservation.status} type="reservation" /></td>
                    <td className="px-5 py-4 text-sm text-slate-600">{reservation.seats}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">₹{reservation.amount.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <button onClick={() => updateReservationStatus(reservation.id, 'Confirmed')} className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"><CheckCircle2 className="h-3.5 w-3.5" /> Confirm</button>
                        <button onClick={() => updateReservationStatus(reservation.id, 'Pending')} className="inline-flex items-center gap-1 rounded-xl border border-amber-200 bg-amber-50 px-2.5 py-2 text-xs font-semibold text-amber-700 hover:bg-amber-100"><Clock3 className="h-3.5 w-3.5" /> Pending</button>
                        <button onClick={() => updateReservationStatus(reservation.id, 'Cancelled')} className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-2.5 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100"><XCircle className="h-3.5 w-3.5" /> Cancel</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500"><SlidersHorizontal className="h-4 w-4" /> {filtered.length} reservations</div>
        <div className="flex items-center gap-2">
          <button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
          <span className="text-sm font-medium text-slate-700">Page {page} of {totalPages}</span>
          <button onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
