'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { EventForm } from '../../../../../components/events/EventForm';
import { useEventData } from '../../../../../hooks/useEventData';
import { eventApi } from '../../../../../services/eventApi';

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const { events, upsertEvent } = useEventData();
  const event = events.find((item) => item.id === Number(params.id));

  if (!event) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-600 shadow-soft">Event not found.</div>;
  }

  const handleSubmit = async (values: any) => {
    const updated = await eventApi.updateEvent(event.id, {
      ...event,
      ...values,
    });
    upsertEvent(updated);
    router.push(`/events/events/${event.id}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600">Update</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Edit event</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <EventForm
          initialValues={{
            name: event.name,
            description: event.description,
            date: event.date,
            startTime: event.startTime,
            endTime: event.endTime,
            location: event.location,
            organizer: event.organizer,
            capacity: event.capacity,
            category: event.category,
            image: event.image,
            status: event.status,
          }}
          submitLabel="Save changes"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
