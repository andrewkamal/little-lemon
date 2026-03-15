import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
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

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
