export async function GET() {
  const events = [
    {
      id: 1,
      title: 'Tech Summit 2026',
      category: 'Conference',
      date: '2026-09-18',
      time: '09:30 AM',
      venue: 'Nexus Hall, Bengaluru',
      status: 'Confirmed',
      attendees: 320,
      capacity: 400,
      organizer: 'Innovation Lab',
      ticketsSold: 280
    },
    {
      id: 2,
      title: 'Design Meetup',
      category: 'Networking',
      date: '2026-09-25',
      time: '06:00 PM',
      venue: 'Studio 8, Hyderabad',
      status: 'Open',
      attendees: 185,
      capacity: 250,
      organizer: 'Creative Circle',
      ticketsSold: 165
    },
    {
      id: 3,
      title: 'Startup Pitch Night',
      category: 'Startup',
      date: '2026-10-02',
      time: '07:30 PM',
      venue: 'Aurora Center, Pune',
      status: 'Pending',
      attendees: 90,
      capacity: 180,
      organizer: 'Launchpad Ventures',
      ticketsSold: 72
    },
    {
      id: 4,
      title: 'Product Launch Expo',
      category: 'Product',
      date: '2026-10-12',
      time: '10:00 AM',
      venue: 'Expo Arena, Mumbai',
      status: 'Confirmed',
      attendees: 540,
      capacity: 700,
      organizer: 'Motive Studio',
      ticketsSold: 510
    }
  ];

  return Response.json({ events });
}
