import { Link } from "react-router-dom";

function ConfirmedBooking({ bookingData }) {
  return (
    <section className="confirmed-booking container" aria-live="polite">
      <h1>Thank you for your reservation!</h1>
      <p className="confirmed-subtitle">
        We look forward to seeing you at Little Lemon.
      </p>

      {bookingData && (
        <div className="confirmation-card">
          <h2 className="confirmation-card-title">Confirmation details</h2>
          <ul className="confirmation-details">
            <li>
              <strong>Occasion:</strong> {bookingData.occasion}
            </li>
            <li>
              <strong>Guests:</strong> {bookingData.guests}
            </li>
            <li>
              <strong>Date:</strong> {bookingData.date}
            </li>
            <li>
              <strong>Time:</strong> {bookingData.time}
            </li>
          </ul>
        </div>
      )}

      <Link to="/" className="button-link confirmed-back-btn">
        Back to home
      </Link>
    </section>
  );
}

export default ConfirmedBooking;