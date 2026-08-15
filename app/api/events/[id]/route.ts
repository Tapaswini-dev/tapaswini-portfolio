import { mockEvents } from '../../../../data/mockData';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const event = mockEvents.find((item) => item.id === id);
  return Response.json({ event });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const payload = await request.json();
  const eventIndex = mockEvents.findIndex((item) => item.id === id);
  const nextEvent = { ...mockEvents[eventIndex], ...payload, id };
  mockEvents[eventIndex] = nextEvent;
  return Response.json({ event: nextEvent });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const index = mockEvents.findIndex((item) => item.id === id);
  if (index >= 0) mockEvents.splice(index, 1);
  return Response.json({ success: true });
}
