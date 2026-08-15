'use client';

import { useRouter } from 'next/navigation';
import { EventForm } from '../../../../components/events/EventForm';
import { useEventData } from '../../../../hooks/useEventData';
import { eventApi } from '../../../../services/eventApi';
import type { EventItem } from '../../../../types/event';

export default function NewEventPage() {
  const router = useRouter();
  const { upsertEvent } = useEventData();

  const handleSubmit = async (values: Omit<EventItem, 'id' | 'registeredAttendees'>) => {
    const result = await eventApi.createEvent({
      ...values,
      image: values.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    });

    upsertEvent({ ...result, registeredAttendees: 0 });
    router.push('/events-demo/events');
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">Create</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">New event</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <EventForm submitLabel="Create event" onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
