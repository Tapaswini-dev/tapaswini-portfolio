export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';
export type ReservationStatus = 'Confirmed' | 'Pending' | 'Cancelled' | 'Waitlisted';
export type AttendanceStatus = 'Attended' | 'Not Attended' | 'Pending';
export type PaymentStatus = 'Paid' | 'Pending' | 'Refunded';

export interface EventItem {
  id: number;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  organizer: string;
  capacity: number;
  category: string;
  image: string;
  status: EventStatus;
  registeredAttendees: number;
}

export interface Attendee {
  id: number;
  name: string;
  email: string;
  phone: string;
  eventId: number;
  eventName: string;
  registrationDate: string;
  reservationStatus: ReservationStatus;
  paymentStatus: PaymentStatus;
  attendanceStatus: AttendanceStatus;
}

export interface Reservation {
  id: number;
  eventId: number;
  attendeeId: number;
  attendeeName: string;
  eventName: string;
  status: ReservationStatus;
  seats: number;
  createdAt: string;
  amount: number;
}

export interface DashboardStat {
  label: string;
  value: string;
  delta: string;
  trend: 'up' | 'down';
  icon: string;
}
