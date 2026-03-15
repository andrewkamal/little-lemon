import { useEffect } from "react";
import { useFormik } from "formik";

export const BOOKING_OCCASIONS = [
  "Birthday",
  "Anniversary",
  "Business Meal",
  "Other",
];

export function getTodayDateString() {
  return new Date().toISOString().split("T")[0];
}

export function validateDate(date) {
  const today = getTodayDateString();

  if (!date) {
    return "Please choose a date";
  }

  if (date < today) {
    return "Date cannot be in the past";
  }

  return "";
}

export function validateTime(time, availableTimes) {
  if (!time) {
    return "Please choose a time";
  }

  if (!availableTimes.includes(time)) {
    return "Please choose an available time";
  }

  return "";
}

export function validateGuests(guests) {
  const guestCount = Number(guests);

  if (!Number.isInteger(guestCount)) {
    return "Guest count must be a whole number";
  }

  if (guestCount < 1 || guestCount > 10) {
    return "Guests must be between 1 and 10";
  }

  return "";
}

export function validateOccasion(occasion) {
  if (!BOOKING_OCCASIONS.includes(occasion)) {
    return "Please choose a valid occasion";
  }

  return "";
}

export function validateBookingForm(values, availableTimes) {
  const errors = {};
  const dateError = validateDate(values.date);
  const timeError = validateTime(values.time, availableTimes);
  const guestsError = validateGuests(values.guests);
  const occasionError = validateOccasion(values.occasion);

  if (dateError) {
    errors.date = dateError;
  }

  if (timeError) {
    errors.time = timeError;
  }

  if (guestsError) {
    errors.guests = guestsError;
  }

  if (occasionError) {
    errors.occasion = occasionError;
  }

  return errors;
}

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: availableTimes[0] || "",
      guests: 2,
      occasion: "Birthday",
    },
    validate: (values) => validateBookingForm(values, availableTimes),
    onSubmit: (values) => {
      submitForm({ ...values, guests: Number(values.guests) });
    },
  });

  const isFormValid =
    Object.keys(validateBookingForm(formik.values, availableTimes)).length ===
    0;

  useEffect(() => {
    if (!availableTimes.includes(formik.values.time)) {
      formik.setFieldValue("time", availableTimes[0] || "", false);
    }
  }, [availableTimes, formik.values.time, formik.setFieldValue]);

  function handleDateChange(e) {
    formik.handleChange(e);
    dispatch({ type: "date_change", date: e.target.value });
  }

  return (
    <form
      className="booking-form"
      onSubmit={formik.handleSubmit}
      noValidate
      aria-label="Table reservation form"
    >
      <fieldset>
        <legend>
          <h2>Book Now</h2>
        </legend>

        <div className="form-field">
          <label htmlFor="booking-date">Choose Date</label>
          <input
            required
            type="date"
            id="booking-date"
            name="date"
            value={formik.values.date}
            onChange={handleDateChange}
            onBlur={formik.handleBlur}
            min={getTodayDateString()}
            aria-required="true"
            aria-invalid={Boolean(formik.touched.date && formik.errors.date)}
            aria-describedby="booking-date-error"
          />
          {formik.touched.date && formik.errors.date ? (
            <p id="booking-date-error" role="alert" aria-live="polite">
              {formik.errors.date}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="booking-time">Choose Time</label>
          <select
            required
            id="booking-time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required="true"
            aria-invalid={Boolean(formik.touched.time && formik.errors.time)}
            aria-describedby="booking-time-error"
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time ? (
            <p id="booking-time-error" role="alert" aria-live="polite">
              {formik.errors.time}
            </p>
          ) : null}
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
            step="1"
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required="true"
            aria-invalid={Boolean(
              formik.touched.guests && formik.errors.guests,
            )}
            aria-describedby="booking-guests-error"
          />
          {formik.touched.guests && formik.errors.guests ? (
            <p id="booking-guests-error" role="alert" aria-live="polite">
              {formik.errors.guests}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="booking-occasion">Occasion</label>
          <select
            required
            id="booking-occasion"
            name="occasion"
            value={formik.values.occasion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required="true"
            aria-invalid={Boolean(
              formik.touched.occasion && formik.errors.occasion,
            )}
            aria-describedby="booking-occasion-error"
          >
            {BOOKING_OCCASIONS.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <p id="booking-occasion-error" role="alert" aria-live="polite">
              {formik.errors.occasion}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="button-link booking-submit"
          aria-label="On Click"
          disabled={!isFormValid}
        >
          Make Your Reservation
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;
