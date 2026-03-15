import { useState } from "react";

const availableTimes = [
  "5:00 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "10:00 PM",
];

const initialForm = {
  date: "",
  time: availableTimes[0],
  guests: 2,
  occasion: "Birthday",
};

function BookingPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="booking container" aria-live="polite">
        <div className="booking-confirmation">
          <h1>Booking Confirmed!</h1>
          <p>
            Thank you! Your table for <strong>{form.guests}</strong>{" "}
            {Number(form.guests) === 1 ? "guest" : "guests"} on{" "}
            <strong>{form.date}</strong> at <strong>{form.time}</strong> has
            been reserved.
          </p>
          <p>We look forward to seeing you at Little Lemon, Chicago.</p>
          <button className="button-link" onClick={() => setSubmitted(false)}>
            Make Another Reservation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reservations"
      aria-labelledby="booking-heading"
      className="booking container"
    >
      <h1 id="booking-heading">Reserve a Table</h1>
      <p>
        Book your table online and enjoy a memorable dining experience at Little
        Lemon.
      </p>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Table reservation form"
      >
        <div className="form-field">
          <label htmlFor="booking-date">Choose Date</label>
          <input
            required
            type="date"
            id="booking-date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="form-field">
          <label htmlFor="booking-time">Choose Time</label>
          <select
            id="booking-time"
            name="time"
            value={form.time}
            onChange={handleChange}
          >
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="booking-guests">Number of Guests</label>
          <input
            required
            type="number"
            id="booking-guests"
            name="guests"
            min="1"
            max="10"
            value={form.guests}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="booking-occasion">Occasion</label>
          <select
            id="booking-occasion"
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business Meal">Business Meal</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="button-link booking-submit">
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingPage;
