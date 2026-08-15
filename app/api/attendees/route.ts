import { mockAttendees } from '../../../data/mockData';

export async function GET() {
  return Response.json({ attendees: mockAttendees });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const attendee = {
      id: Date.now(),
      ...payload,
    };

    mockAttendees.push(attendee);
    return Response.json({ attendee }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create attendee' }, { status: 400 });
  }
}

