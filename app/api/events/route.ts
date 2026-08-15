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

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;
    
    const eventIndex = mockEvents.findIndex(e => e.id === id);
    
    if (eventIndex === -1) {
      return Response.json({ error: 'Event not found' }, { status: 404 });
    }
    
    mockEvents[eventIndex] = {
      ...mockEvents[eventIndex],
      ...updates,
      id,
    };
    
    return Response.json({ event: mockEvents[eventIndex] });
  } catch (error) {
    return Response.json({ error: 'Failed to update event' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    
    if (!id) {
      return Response.json({ error: 'Event ID required' }, { status: 400 });
    }
    
    const eventIndex = mockEvents.findIndex(e => e.id === id);
    
    if (eventIndex === -1) {
      return Response.json({ error: 'Event not found' }, { status: 404 });
    }
    
    const deletedEvent = mockEvents.splice(eventIndex, 1);
    
    return Response.json({ message: 'Event deleted', event: deletedEvent[0] });
  } catch (error) {
    return Response.json({ error: 'Failed to delete event' }, { status: 400 });
  }
}
