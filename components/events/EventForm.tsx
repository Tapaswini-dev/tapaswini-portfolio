'use client';

import { useMemo, useState } from 'react';
import type { EventItem, EventStatus } from '../../types/event';

const statusOptions: EventStatus[] = ['Upcoming', 'Ongoing', 'Completed', 'Cancelled'];

const defaultValues: Omit<EventItem, 'id' | 'registeredAttendees'> = {
  name: '',
  description: '',
  date: '',
  startTime: '',
  endTime: '',
  location: '',
  organizer: '',
  capacity: 100,
  category: 'Conference',
  image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  status: 'Upcoming',
};

export function EventForm({
  initialValues,
  onSubmit,
  submitLabel,
}: {
  initialValues?: Partial<Omit<EventItem, 'id' | 'registeredAttendees'>>;
  onSubmit: (values: Omit<EventItem, 'id' | 'registeredAttendees'>) => void;
  submitLabel: string;
}) {
  const [values, setValues] = useState<Omit<EventItem, 'id' | 'registeredAttendees'>>({
    ...defaultValues,
    ...initialValues,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = useMemo(
    () => ['Conference', 'Networking', 'Startup', 'Product', 'Technology', 'Community', 'Marketing', 'Healthcare', 'Finance', 'Retail', 'Operations', 'Security', 'HR'],
    [],
  );

  const handleChange = (field: keyof typeof values, value: string | number) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = 'Event name is required.';
    if (!values.description.trim()) nextErrors.description = 'Description is required.';
    if (!values.date) nextErrors.date = 'Date is required.';
    if (!values.startTime) nextErrors.startTime = 'Start time is required.';
    if (!values.endTime) nextErrors.endTime = 'End time is required.';
    if (!values.location.trim()) nextErrors.location = 'Location is required.';
    if (!values.organizer.trim()) nextErrors.organizer = 'Organizer is required.';
    if (values.capacity <= 0) nextErrors.capacity = 'Capacity must be greater than zero.';
    if (!values.category.trim()) nextErrors.category = 'Category is required.';
    if (!values.image.trim()) nextErrors.image = 'Image URL is required.';
    return nextErrors;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    onSubmit(values);
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">Event name</label>
          <input value={values.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.name ? <p className="mt-1 text-sm text-rose-600">{errors.name}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
          <textarea value={values.description} onChange={(e) => handleChange('description', e.target.value)} rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.description ? <p className="mt-1 text-sm text-rose-600">{errors.description}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Event date</label>
          <input type="date" value={values.date} onChange={(e) => handleChange('date', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.date ? <p className="mt-1 text-sm text-rose-600">{errors.date}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
          <select value={values.status} onChange={(e) => handleChange('status', e.target.value as EventStatus)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none">
            {statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Start time</label>
          <input type="time" value={values.startTime} onChange={(e) => handleChange('startTime', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.startTime ? <p className="mt-1 text-sm text-rose-600">{errors.startTime}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">End time</label>
          <input type="time" value={values.endTime} onChange={(e) => handleChange('endTime', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.endTime ? <p className="mt-1 text-sm text-rose-600">{errors.endTime}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
          <input value={values.location} onChange={(e) => handleChange('location', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.location ? <p className="mt-1 text-sm text-rose-600">{errors.location}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Organizer</label>
          <input value={values.organizer} onChange={(e) => handleChange('organizer', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.organizer ? <p className="mt-1 text-sm text-rose-600">{errors.organizer}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Maximum capacity</label>
          <input type="number" min={1} value={values.capacity} onChange={(e) => handleChange('capacity', Number(e.target.value))} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.capacity ? <p className="mt-1 text-sm text-rose-600">{errors.capacity}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
          <select value={values.category} onChange={(e) => handleChange('category', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none">
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category ? <p className="mt-1 text-sm text-rose-600">{errors.category}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">Event image URL</label>
          <input value={values.image} onChange={(e) => handleChange('image', e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none" />
          {errors.image ? <p className="mt-1 text-sm text-rose-600">{errors.image}</p> : null}
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">{submitLabel}</button>
      </div>
    </form>
  );
}
