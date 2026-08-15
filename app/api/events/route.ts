import { mockEvents } from '../../../data/mockData';

export async function GET() {
  return Response.json({ events: mockEvents });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Generate a new ID
    const newId = Math.max(...mockEvents.map(e => e.id), 0) + 1;
    
    const newEvent = {
      id: newId,
      ...body,
      registeredAttendees: body.registeredAttendees ?? 0,
    };
    
    mockEvents.push(newEvent);
    
    return Response.json({ event: newEvent }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create event' }, { status: 400 });
  }
}
