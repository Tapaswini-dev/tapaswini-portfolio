import { mockEvents } from '../../../../data/mockData';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const event = mockEvents.find((item) => item.id === id);
  
  if (!event) {
    return Response.json({ error: 'Event not found' }, { status: 404 });
  }
  
  return Response.json({ event });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const payload = await request.json();
    const eventIndex = mockEvents.findIndex((item) => item.id === id);
    
    if (eventIndex === -1) {
      return Response.json({ error: 'Event not found' }, { status: 404 });
    }
    
    const nextEvent = { ...mockEvents[eventIndex], ...payload, id };
    mockEvents[eventIndex] = nextEvent;
    
    return Response.json({ event: nextEvent });
  } catch (error) {
    return Response.json({ error: 'Failed to update event' }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const index = mockEvents.findIndex((item) => item.id === id);
  
  if (index === -1) {
    return Response.json({ error: 'Event not found' }, { status: 404 });
  }
  
  mockEvents.splice(index, 1);
  return Response.json({ success: true });
}
