import { mockAttendees } from '../../../data/mockData';

export async function GET() {
  return Response.json({ attendees: mockAttendees });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const attendee = {
    id: Date.now(),
    ...payload,
  };

  mockAttendees.push(attendee);
  return Response.json({ attendee });
}
