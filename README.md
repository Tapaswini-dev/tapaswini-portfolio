# Event Management Application Demo

This project is a professional event management dashboard built inside the existing portfolio project to showcase real-world frontend skills in a single, interview-ready application.

## What we built here

This project includes a complete event admin experience with:

- dashboard overview with key business metrics
- event creation and update flow
- event listing with search, filters, sorting, and pagination
- event details page with capacity and attendee summary
- attendee management section
- reservation workflow and status updates
- responsive enterprise-style admin layout
- mock REST API integration for all data operations

The app is designed to look like a production business application rather than a tutorial demo.

## Project purpose

This app helps demonstrate:

- React.js development skills
- TypeScript usage in real-world app architecture
- REST API integration patterns
- dashboard and chart-based analytics
- reusable UI and form design
- search/filter/pagination logic
- responsive admin product design
- clean state management and data flow

## Main features implemented

### Dashboard
- total events
- upcoming events
- total attendees
- confirmed reservations
- pending reservations
- cancelled reservations
- monthly analytics chart
- recent events and attendee activity
- quick action cards

### Event management
- add new event
- edit existing event
- delete event
- view event details
- search by event name, organizer, or location
- filter by status and location
- sort by date or alphabetical order
- pagination for listings

### Event form
- event name
- description
- date
- start and end time
- location
- organizer
- maximum capacity
- category
- image URL
- status
- form validation with TypeScript-based checks

### Attendee management
- attendee name, email, phone
- event association
- registration date
- reservation status
- payment status
- attendance status
- search/filter support

### Reservation management
- create reservation request flow
- view reservation data
- update reservation state
- confirm pending reservations
- cancel reservations

## API layer used here

This app uses a mock REST API layer built inside the Next.js app so the demo works completely in-browser without a real backend.

### API endpoints implemented

- GET /api/events
- GET /api/events/:id
- POST /api/events
- PUT /api/events/:id
- DELETE /api/events/:id

- GET /api/attendees
- GET /api/attendees/:id
- POST /api/attendees
- PUT /api/attendees/:id
- DELETE /api/attendees/:id

- GET /api/reservations
- POST /api/reservations
- PUT /api/reservations/:id
- DELETE /api/reservations/:id

The frontend uses a centralized service layer with Axios-like patterns and a mock dataset to simulate production API behavior.

## Data used

The project includes realistic demo data with:

- 15+ events
- 30+ attendees
- 20+ reservations

The dataset includes realistic names, dates, locations, event categories, capacities, statuses, and reservation flows.

## Tech stack

- React.js
- TypeScript
- Next.js
- Tailwind CSS
- Recharts
- Axios
- Lucide React
- Responsive UI design

## Project structure

```text
app/
  api/
    attendees/
    events/
    reservations/
  events/
components/
  events/
data/
hooks/
services/
types/
```

## Important implementation details

This project includes important frontend patterns that are useful in interviews and production work:

- reusable components
- TypeScript interfaces and types
- centralized API service layer
- modular folder architecture
- form validation
- state-driven UI behavior
- filtering and sorting logic
- pagination
- dashboard analytics
- reusable status badges and cards
- responsive design for multiple screen sizes
- clean business application style

## How to run locally

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

If port 3000 is busy, Next.js may use another port such as 3001.

## Production build

```bash
npm run build
```

## Notes

This app is intentionally built as a portfolio-ready demo to show real production-style frontend thinking. The event dashboard sits in a separate demo area inside the portfolio project so the portfolio remains intact while the event management app remains easy to present and explain.
