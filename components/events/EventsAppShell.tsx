'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, CalendarDays, LayoutDashboard, Menu, MessageSquareText, UserRound, Users, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/events', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/events/events', label: 'Events', icon: CalendarDays },
  { href: '/events/attendees', label: 'Attendees', icon: Users },
  { href: '/events/reservations', label: 'Reservations', icon: MessageSquareText },
];

export function EventsAppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-slate-950 text-slate-100 transition-transform duration-200 lg:static lg:translate-x-0`}>
          <div className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">EventFlow</p>
              <h1 className="mt-1 text-lg font-semibold">Admin Console</h1>
            </div>
            <button className="lg:hidden" onClick={() => setOpen(false)} type="button" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-2 p-4">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || (href !== '/events' && pathname.startsWith(href));

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 border-t border-slate-800 p-4">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
                AD
              </div>
              <div>
                <p className="font-medium text-white">Admin</p>
                <p className="text-xs text-slate-400">Operations Lead</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button className="lg:hidden" onClick={() => setOpen(true)} type="button" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-indigo-600">Operations</p>
                  <h2 className="text-lg font-semibold text-slate-900">Event Management</h2>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button type="button" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  This Week
                </button>
                <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 p-2 pr-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    AD
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-slate-800">Admin</p>
                    <p className="text-xs text-slate-500">Operations Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
