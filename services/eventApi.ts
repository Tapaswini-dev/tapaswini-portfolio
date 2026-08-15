import axios from 'axios';
import { mockAttendees, mockEvents, mockReservations } from '../data/mockData';
import type { Attendee, EventItem, Reservation } from '../types/event';

// Get API base URL from environment or use relative path (works in both dev and production)
const getBaseURL = () => {
  if (typeof window === 'undefined') {
    // Server-side: use relative path
    return '/api';
  }
  // Client-side: use relative path for production compatibility
  return '/api';
};

const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000, // Increased from 600ms to 10 seconds
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        console.warn('API request timeout - using fallback mock data');
      }
    }
    throw error;
  }
);

// Minimal delay to simulate real API behavior, but not too long
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const withMinimalDelay = async <T>(value: T): Promise<T> => {
  // Removed excessive 250ms delay - just 50ms to simulate minimal network latency
  await wait(50);
  return value;
};

export const eventApi = {
  getEvents: async (): Promise<EventItem[]> => {
    try {
      const response = await api.get('/events');
      return withMinimalDelay((response.data?.events ?? mockEvents) as EventItem[]);
    } catch (error) {
      console.error('Error fetching events:', error);
      // Fallback to mock data on error
      return withMinimalDelay(mockEvents);
    }
  },

  getEventById: async (id: number): Promise<EventItem | undefined> => {
    try {
      const response = await api.get('/events');
      const events = (response.data?.events ?? mockEvents) as EventItem[];
      return withMinimalDelay(events.find((event) => event.id === id));
    } catch (error) {
      console.error('Error fetching event:', error);
      return withMinimalDelay(mockEvents.find((event) => event.id === id));
    }
  },

  createEvent: async (payload: Omit<EventItem, 'id' | 'registeredAttendees'>): Promise<EventItem> => {
    try {
      const response = await api.post('/events', payload);
      return withMinimalDelay({
        ...(response.data?.event ?? payload),
        id: Date.now(),
        registeredAttendees: 0,
      } as EventItem);
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  updateEvent: async (id: number, payload: Partial<EventItem>): Promise<EventItem> => {
    try {
      const response = await api.put(`/events/${id}`, payload);
      return withMinimalDelay({
        ...(response.data?.event ?? payload),
        id,
      } as EventItem);
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  },

  deleteEvent: async (id: number): Promise<number> => {
    try {
      await api.delete(`/events/${id}`);
      return withMinimalDelay(id);
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  },

  getAttendees: async (): Promise<Attendee[]> => {
    try {
      const response = await api.get('/attendees');
      return withMinimalDelay((response.data?.attendees ?? mockAttendees) as Attendee[]);
    } catch (error) {
      console.error('Error fetching attendees:', error);
      // Fallback to mock data on error
      return withMinimalDelay(mockAttendees);
    }
  },

  getReservations: async (): Promise<Reservation[]> => {
    try {
      const response = await api.get('/reservations');
      return withMinimalDelay((response.data?.reservations ?? mockReservations) as Reservation[]);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      // Fallback to mock data on error
      return withMinimalDelay(mockReservations);
    }
  },

  createReservation: async (reservation: Omit<Reservation, 'id'>): Promise<Reservation> => {
    try {
      const response = await api.post('/reservations', reservation);
      return withMinimalDelay({
        ...(response.data?.reservation ?? reservation),
        id: Date.now(),
      } as Reservation);
    } catch (error) {
      console.error('Error creating reservation:', error);
      throw error;
    }
  },

  updateReservation: async (id: number, payload: Partial<Reservation>): Promise<Reservation> => {
    try {
      const response = await api.put(`/reservations/${id}`, payload);
      return withMinimalDelay({
        ...(response.data?.reservation ?? payload),
        id,
      } as Reservation);
    } catch (error) {
      console.error('Error updating reservation:', error);
      throw error;
    }
  },

  deleteReservation: async (id: number): Promise<number> => {
    try {
      await api.delete(`/reservations/${id}`);
      return withMinimalDelay(id);
    } catch (error) {
      console.error('Error deleting reservation:', error);
      throw error;
    }
  },
};

export { api, mockEvents, mockAttendees, mockReservations };
