import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";

const initialForm = {
  date: "",
  time: "",
  guests: 2,
  occasion: "Birthday",
};

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [form, setForm] = useState({
    ...initialForm,
    time: availableTimes[0] || "",
  });

  useEffect(() => {
    if (!availableTimes.includes(form.time)) {
      setForm((prev) => ({ ...prev, time: availableTimes[0] || "" }));
    }
  }, [availableTimes, form.time]);

  function handleFieldChange(name, value) {
    if (name === "date") {
      dispatch({ type: "date_change", date: value });
    }

    setForm((prev) => ({ ...prev, [name]: value }));
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

      <BookingForm
        form={form}
        availableTimes={availableTimes}
        onFieldChange={handleFieldChange}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
