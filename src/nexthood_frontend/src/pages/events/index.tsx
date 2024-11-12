// import React, { useEffect, useState } from 'react';
// import { events as evts } from '../../declarations/events';
// import EventsLayout from '../../components/layout/events.layout';

// const Event

// // Define the Event type
// interface Event {
//   id: string;
//   name: string;
//   description: string;
//   date: string;
//   time: string;
// }

const EventsPage = () => {
    // evts.displayAllEvents().then((v: any) => console.log(v));
    return (<div>
        <p>All Events</p>
    </div>)
}

// const EventComponent: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const allEvents = await evts.displayAllEvents();
//         console.log(allEvents);
//         const transformedEvents = allEvents.map((event) => ({
//             ...event,
//             date: event.date || "", // Ensure it aligns with your React type
//         }));
//         setEvents(transformedEvents);
//         // const allEvents = await evts.displayAllEvents();
//         // setEvents(allEvents);
//       } catch (err) {
//         console.error('Error fetching events:', err);
//         setError('Failed to load events.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <p>Loading events...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="events-page">
//       <h1>All Events</h1>
//       {events.length > 0 ? (
//         <ul className="event-list">
//           {events.map((event) => (
//             <li key={event.id} className="event-item">
//               <h2>{event.name}</h2>
//               <p><strong>Description:</strong> {event.description}</p>
//               <p><strong>Date:</strong> {event.date}</p>
//               <p><strong>Time:</strong> {event.time}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No events available.</p>
//       )}
//     </div>
//   );
// };

export default EventsPage;