import { mockAttendees } from '../../../../data/mockData';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const attendee = mockAttendees.find((item) => item.id === id);
  return Response.json({ attendee });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const payload = await request.json();
  const attendeeIndex = mockAttendees.findIndex((item) => item.id === id);
  const nextAttendee = { ...mockAttendees[attendeeIndex], ...payload, id };
  mockAttendees[attendeeIndex] = nextAttendee;
  return Response.json({ attendee: nextAttendee });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const index = mockAttendees.findIndex((item) => item.id === id);
  if (index >= 0) mockAttendees.splice(index, 1);
  return Response.json({ success: true });
}
