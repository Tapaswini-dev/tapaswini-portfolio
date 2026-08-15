import { EventsAppShell } from '../../components/events/EventsAppShell';

export default function EventsDemoLayout({ children }: { children: React.ReactNode }) {
  return <EventsAppShell>{children}</EventsAppShell>;
}
