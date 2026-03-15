function BookingForm({ form, availableTimes, onFieldChange, submitForm }) {
  function handleSubmit(e) {
    e.preventDefault();
    submitForm(form);
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Table reservation form"
    >
      <h2>Book Now</h2>

      <div className="form-field">
        <label htmlFor="booking-date">Choose Date</label>
        <input
          required
          type="date"
          id="booking-date"
          name="date"
          value={form.date}
          onChange={(e) => onFieldChange("date", e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className="form-field">
        <label htmlFor="booking-time">Choose Time</label>
        <select
          id="booking-time"
          name="time"
          value={form.time}
          onChange={(e) => onFieldChange("time", e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
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
          onChange={(e) => onFieldChange("guests", e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="booking-occasion">Occasion</label>
        <select
          id="booking-occasion"
          name="occasion"
          value={form.occasion}
          onChange={(e) => onFieldChange("occasion", e.target.value)}
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
  );
}

export default BookingForm;
