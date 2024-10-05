import EventCard from '@/components/EventCard';
import { useCallApi } from '@/hooks/useCallApi';
import { Link } from 'react-router-dom';

function Events() {
  const { data: events, error, loading } = useCallApi('dummyEvents.json');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Some error accured please! try refreshing the page or click
        <Link to="/"> here</Link> to go back to home page.
      </p>
    );
  }

  return (
    <div className="container mt-2">
      <h3 className="text-center mb-4">Upcoming Events</h3>
      <div className="row">
        {events.map((event) => (
          <EventCard key={event.event_id} eventDetails={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
