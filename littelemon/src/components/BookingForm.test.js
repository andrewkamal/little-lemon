import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm, {
  getTodayDateString,
  validateBookingForm,
  validateDate,
  validateGuests,
  validateOccasion,
  validateTime,
} from "./BookingForm";

function renderBookingForm(overrides = {}) {
  const props = {
    availableTimes: ["17:00", "18:00"],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
    ...overrides,
  };

  render(<BookingForm {...props} />);

  return props;
}

test("Renders the BookingForm heading", () => {
  renderBookingForm();

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Date input applies expected HTML5 attributes", () => {
  renderBookingForm();
  const dateInput = screen.getByLabelText("Choose Date");

  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("min", getTodayDateString());
});

test("Time select applies expected HTML5 attributes", () => {
  renderBookingForm();
  const timeSelect = screen.getByLabelText("Choose Time");

  expect(timeSelect).toHaveAttribute("required");
  expect(timeSelect).toHaveAttribute("name", "time");
});

test("Guests input applies expected HTML5 attributes", () => {
  renderBookingForm();
  const guestsInput = screen.getByLabelText("Number of Guests");

  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("step", "1");
});

test("Occasion select applies expected HTML5 attributes", () => {
  renderBookingForm();
  const occasionSelect = screen.getByLabelText("Occasion");

  expect(occasionSelect).toHaveAttribute("required");
  expect(occasionSelect).toHaveAttribute("name", "occasion");
});

test("Submit button has ARIA label and is disabled when form is invalid", () => {
  renderBookingForm();
  const submitButton = screen.getByRole("button", { name: "On Click" });

  expect(submitButton).toHaveAttribute("aria-label", "On Click");
  expect(submitButton).toBeDisabled();
});

test("Submit button is enabled when form is valid", () => {
  const { dispatch } = renderBookingForm();
  const today = getTodayDateString();
  const dateInput = screen.getByLabelText("Choose Date");

  fireEvent.change(dateInput, { target: { value: today } });

  expect(dispatch).toHaveBeenCalledWith({ type: "date_change", date: today });
  expect(screen.getByRole("button", { name: "On Click" })).toBeEnabled();
});

test("validateDate returns error for invalid date and no error for valid date", () => {
  expect(validateDate("")).toBe("Please choose a date");
  expect(validateDate("2000-01-01")).toBe("Date cannot be in the past");
  expect(validateDate(getTodayDateString())).toBe("");
});

test("validateTime returns error for invalid time and no error for valid time", () => {
  expect(validateTime("", ["17:00", "18:00"])).toBe("Please choose a time");
  expect(validateTime("22:00", ["17:00", "18:00"])).toBe(
    "Please choose an available time",
  );
  expect(validateTime("17:00", ["17:00", "18:00"])).toBe("");
});

test("validateGuests returns error for invalid values and no error for valid values", () => {
  expect(validateGuests(0)).toBe("Guests must be between 1 and 10");
  expect(validateGuests(11)).toBe("Guests must be between 1 and 10");
  expect(validateGuests("abc")).toBe("Guest count must be a whole number");
  expect(validateGuests(5)).toBe("");
});

test("validateOccasion returns error for invalid value and no error for valid values", () => {
  expect(validateOccasion("Graduation")).toBe("Please choose a valid occasion");
  expect(validateOccasion("Birthday")).toBe("");
});

test("validateBookingForm returns errors for invalid form and no errors for valid form", () => {
  expect(
    validateBookingForm(
      {
        date: "",
        time: "22:00",
        guests: 0,
        occasion: "Graduation",
      },
      ["17:00", "18:00"],
    ),
  ).toEqual({
    date: "Please choose a date",
    time: "Please choose an available time",
    guests: "Guests must be between 1 and 10",
    occasion: "Please choose a valid occasion",
  });

  expect(
    validateBookingForm(
      {
        date: getTodayDateString(),
        time: "17:00",
        guests: 2,
        occasion: "Birthday",
      },
      ["17:00", "18:00"],
    ),
  ).toEqual({});
});
