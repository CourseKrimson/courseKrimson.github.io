import logo from '@/assets/images/logo.png';
import PropTypes from 'prop-types';

function EventCard({ eventDetails }) {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card shining-card  h-100">
          <div className="event-date rounded-circle">
            <div className="day">{eventDetails.event_date.day}</div>
            <div className="month">{eventDetails.event_date.month}</div>
          </div>
          <img src={logo} className="event-image card-img-top" />
          <div className="card-body text-center">
            <h3 className="card-title">{eventDetails.event_title}</h3>
            <p className="card-text">{eventDetails.event_description}</p>
          </div>
          <div className="card-footer text-center">
            <button className="btn">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

EventCard.propTypes = {
  eventDetails: PropTypes.shape({
    event_title: PropTypes.string,
    event_date: PropTypes.shape({
      day: PropTypes.string,
      month: PropTypes.string,
      year: PropTypes.string,
    }),
    event_description: PropTypes.string,
    event_image: PropTypes.string,
  }).isRequired,
};

export default EventCard;
