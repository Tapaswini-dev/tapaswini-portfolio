import { mockReservations } from '../../../data/mockData';

export async function GET() {
  return Response.json({ reservations: mockReservations });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const reservation = {
      id: Date.now(),
      ...payload,
    };

    mockReservations.push(reservation);
    return Response.json({ reservation }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create reservation' }, { status: 400 });
  }
}

