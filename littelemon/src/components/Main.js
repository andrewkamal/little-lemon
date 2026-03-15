import { useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

export const INITIAL_AVAILABLE_TIMES = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

function resolveFetchApi() {
  if (typeof window.fetchAPI === "function") {
    return window.fetchAPI;
  }

  return null;
}

function resolveSubmitApi() {
  if (typeof window.submitAPI === "function") {
    return window.submitAPI;
  }

  return null;
}

function getAvailableTimes(date) {
  const bookingApi = resolveFetchApi();

  if (bookingApi) {
    return bookingApi(date);
  }

  return INITIAL_AVAILABLE_TIMES;
}

export function initializeTimes() {
  return getAvailableTimes(new Date());
}

export function updateTimes(state, action) {
  if (action.type === "date_change") {
    return getAvailableTimes(new Date(action.date));
  }

  return state;
}

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    INITIAL_AVAILABLE_TIMES,
    initializeTimes,
  );

  const [bookingData, setBookingData] = useState(null);

  function submitForm(formData) {
    const bookingApi = resolveSubmitApi();
    const isSubmitted = bookingApi ? bookingApi(formData) : true;

    if (isSubmitted) {
      setBookingData(formData);
      navigate("/confirmed-booking");
    }
  }

  return (
    <main className="site-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking bookingData={bookingData} />} />
      </Routes>
    </main>
  );
}

export default Main;
