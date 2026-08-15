import { mockReservations } from '../../../../data/mockData';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const reservation = mockReservations.find((item) => item.id === id);
  
  if (!reservation) {
    return Response.json({ error: 'Reservation not found' }, { status: 404 });
  }
  
  return Response.json({ reservation });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const payload = await request.json();
    const reservationIndex = mockReservations.findIndex((item) => item.id === id);
    
    if (reservationIndex === -1) {
      return Response.json({ error: 'Reservation not found' }, { status: 404 });
    }
    
    const nextReservation = { ...mockReservations[reservationIndex], ...payload, id };
    mockReservations[reservationIndex] = nextReservation;
    
    return Response.json({ reservation: nextReservation });
  } catch (error) {
    return Response.json({ error: 'Failed to update reservation' }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const index = mockReservations.findIndex((item) => item.id === id);
  
  if (index === -1) {
    return Response.json({ error: 'Reservation not found' }, { status: 404 });
  }
  
  mockReservations.splice(index, 1);
  return Response.json({ success: true });
}
