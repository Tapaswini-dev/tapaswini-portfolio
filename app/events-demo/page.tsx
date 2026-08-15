'use client';

import Link from 'next/link';
import { ArrowRight, CalendarCheck2, ChartColumn, CircleDollarSign, Clock3, Plus, TrendingUp, Users } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useMemo } from 'react';
import { useEventData } from '../../hooks/useEventData';

const monthKeys = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function EventsDashboardPage() {
  const { events, attendees, reservations, loading, error, stats } = useEventData();

  const chartData = useMemo(() => {
    const monthly = monthKeys.map((month) => ({ month, events: 0, reservations: 0 }));

    events.forEach((event) => {
      const index = new Date(event.date).getMonth();
      if (monthly[index]) monthly[index].events += 1;
    });

    reservations.forEach((reservation) => {
      const index = new Date(reservation.createdAt).getMonth();
      if (monthly[index]) monthly[index].reservations += 1;
    });

    return monthly;
  }, [events, reservations]);

  const attendanceData = useMemo(() => {
    const counts = {
      Attended: attendees.filter((person) => person.attendanceStatus === 'Attended').length,
      'Not Attended': attendees.filter((person) => person.attendanceStatus === 'Not Attended').length,
      Pending: attendees.filter((person) => person.attendanceStatus === 'Pending').length,
    };

    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [attendees]);

  const recentEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 4);
  const upcomingEvents = [...events].filter((event) => event.status === 'Upcoming').slice(0, 4);

  if (loading) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-soft">Loading dashboard metrics…</div>;
  }

  if (error) {
    return <div className="rounded-3xl border border-rose-200 bg-rose-50 p-10 text-center text-rose-700 shadow-soft">{error}</div>;
  }

  const statCards = [
    { label: 'Total Events', value: String(stats.totalEvents), delta: '+12%', trend: 'up', icon: CalendarCheck2 },
    { label: 'Upcoming Events', value: String(stats.upcomingCount), delta: '+8%', trend: 'up', icon: Clock3 },
    { label: 'Total Attendees', value: String(stats.totalAttendees), delta: '+17%', trend: 'up', icon: Users },
    { label: 'Confirmed Reservations', value: String(stats.confirmedReservations), delta: '+4%', trend: 'up', icon: TrendingUp },
    { label: 'Pending Reservations', value: String(stats.pendingReservations), delta: '-2%', trend: 'down', icon: ChartColumn },
    { label: 'Cancelled Reservations', value: String(stats.cancelledReservations), delta: '-5%', trend: 'down', icon: CircleDollarSign },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Event operations dashboard</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/events-demo/events/new" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
            <Plus className="h-4 w-4" />
            Create Event
          </Link>
          <Link href="/events-demo/events" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Manage Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {statCards.map(({ label, value, delta, trend, icon: Icon }) => (
          <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">{value}</h2>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className={`mt-4 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
              <TrendingUp className={`h-3.5 w-3.5 ${trend === 'down' ? 'rotate-180' : ''}`} />
              {delta}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Event activity</p>
              <h3 className="text-xl font-semibold text-slate-900">Monthly performance</h3>
            </div>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">Updated today</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="eventsFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="events" stroke="#4f46e5" strokeWidth={3} fill="url(#eventsFill)" />
                <Area type="monotone" dataKey="reservations" stroke="#10b981" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-500">Attendance</p>
            <h3 className="text-xl font-semibold text-slate-900">Check-in status</h3>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie dataKey="value" data={attendanceData} innerRadius={56} outerRadius={90} paddingAngle={4} strokeWidth={3} stroke="#fff">
                  {attendanceData.map((entry, index) => (
                    <Cell key={entry.name} fill={['#4f46e5', '#f59e0b', '#10b981'][index % 3]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid gap-3 text-sm">
            {attendanceData.map((entry, index) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${['bg-indigo-500', 'bg-amber-400', 'bg-emerald-500'][index]}`} />
                  {entry.name}
                </div>
                <span className="font-semibold text-slate-700">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1.4fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Pipeline</p>
              <h3 className="text-xl font-semibold text-slate-900">Recent events</h3>
            </div>
            <Link href="/events-demo/events" className="text-sm font-semibold text-indigo-600">View all</Link>
          </div>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div key={event.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{event.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{event.location}</p>
                  </div>
                  <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-700">{event.status}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>{new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>{event.registeredAttendees}/{event.capacity} seats</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Schedule</p>
              <h3 className="text-xl font-semibold text-slate-900">Upcoming events</h3>
            </div>
            <Link href="/events-demo/events" className="text-sm font-semibold text-indigo-600">Manage</Link>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                    {new Date(event.date).getDate()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{event.name}</p>
                    <p className="text-sm text-slate-500">{event.location}</p>
                  </div>
                </div>
                <div className="text-right text-sm text-slate-500">
                  <p>{event.startTime}</p>
                  <p>{event.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Latest activity</p>
              <h3 className="text-xl font-semibold text-slate-900">Recent attendee activity</h3>
            </div>
            <Link href="/events-demo/attendees" className="text-sm font-semibold text-indigo-600">See all</Link>
          </div>
          <div className="space-y-4">
            {attendees.slice(0, 6).map((attendee) => (
              <div key={attendee.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-3">
                <div>
                  <p className="font-medium text-slate-800">{attendee.name}</p>
                  <p className="text-sm text-slate-500">{attendee.eventName}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700">{attendee.reservationStatus}</p>
                  <p className="text-xs text-slate-500">{attendee.paymentStatus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-500">Quick actions</p>
            <h3 className="text-xl font-semibold text-slate-900">Operations</h3>
          </div>
          <div className="space-y-3">
            <Link href="/events-demo/events/new" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:bg-slate-100">
              <span>
                <span className="block font-semibold text-slate-800">Add new event</span>
                <span className="text-sm text-slate-500">Launch a new campaign or summit</span>
              </span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
            </Link>
            <Link href="/events-demo/reservations" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:bg-slate-100">
              <span>
                <span className="block font-semibold text-slate-800">Review reservations</span>
                <span className="text-sm text-slate-500">Confirm pending seats and approvals</span>
              </span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
            </Link>
            <Link href="/events-demo/attendees" className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:bg-slate-100">
              <span>
                <span className="block font-semibold text-slate-800">Manage attendees</span>
                <span className="text-sm text-slate-500">Track registrations and attendance</span>
              </span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
