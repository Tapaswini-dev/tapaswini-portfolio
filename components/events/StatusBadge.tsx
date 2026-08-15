import type { EventStatus, ReservationStatus, AttendanceStatus } from '../../types/event';

const eventStyles: Record<EventStatus, string> = {
  Upcoming: 'bg-sky-100 text-sky-700',
  Ongoing: 'bg-violet-100 text-violet-700',
  Completed: 'bg-emerald-100 text-emerald-700',
  Cancelled: 'bg-rose-100 text-rose-700',
};

const reservationStyles: Record<ReservationStatus, string> = {
  Confirmed: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  Cancelled: 'bg-rose-100 text-rose-700',
  Waitlisted: 'bg-slate-200 text-slate-700',
};

const attendanceStyles: Record<AttendanceStatus, string> = {
  Attended: 'bg-emerald-100 text-emerald-700',
  'Not Attended': 'bg-rose-100 text-rose-700',
  Pending: 'bg-amber-100 text-amber-700',
};

export function StatusBadge({
  value,
  type,
}: {
  value: EventStatus | ReservationStatus | AttendanceStatus;
  type: 'event' | 'reservation' | 'attendance';
}) {
  const palette = type === 'event' ? eventStyles : type === 'reservation' ? reservationStyles : attendanceStyles;
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${palette[value as never] ?? 'bg-slate-100 text-slate-700'}`}>{value}</span>;
}
