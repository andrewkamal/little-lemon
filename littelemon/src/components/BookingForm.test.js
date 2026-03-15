import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const form = {
  date: "",
  time: "17:00",
  guests: 2,
  occasion: "Birthday",
};

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      form={form}
      availableTimes={["17:00", "18:00"]}
      onFieldChange={() => {}}
      submitForm={() => {}}
    />,
  );

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
