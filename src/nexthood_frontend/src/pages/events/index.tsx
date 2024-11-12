import React, { useEffect, useState } from "react";
import { events as eventsModel } from "declarations/events";
// import EventsLayout from '../../components/layout/events.layout';

// const Event

// Define the Event type
interface Event {
	id: string;
	name: string;
	description: string;
	date: string;
	time: string;
}

const EventsPage = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const allEvents = await eventsModel.getAll();
				console.log(allEvents);
				setEvents(allEvents);
			} catch (err) {
				console.log("Error fetching events \n", err);
				setError("Failed to load events");
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	if (loading) {
		return <p>Loading events...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<main className="max-w-4xl mx-auto py-8 px-4">
			<h1 className="text-2xl font-bold text-center text-gray-800 mb-8">All Events</h1>

			{events.length > 0 ? (
				<ul className="event_list space-y-6">
					{events.map((event) => (
						<li key={event.id} className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
							<h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
							<p className="mt-2 text-gray-600">
								<strong className="font-semibold">Description:</strong> {event.description}
							</p>
							<p className="mt-2 text-gray-600">
								<strong className="font-semibold">Date:</strong> {event.date}
							</p>
							<p className="mt-2 text-gray-600">
								<strong className="font-semibold">Time:</strong> {event.time}
							</p>
						</li>
					))}
				</ul>
			) : (
				<p className="text-center text-gray-500">No Events Available</p>
			)}
		</main>
	);
};

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
