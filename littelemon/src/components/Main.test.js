import { INITIAL_AVAILABLE_TIMES, initializeTimes, updateTimes } from "./Main";

jest.mock(
  "react-router-dom",
  () => {
    const React = require("react");

    return {
      Routes: ({ children }) => <>{children}</>,
      Route: ({ element }) => element,
      useNavigate: () => jest.fn(),
    };
  },
  { virtual: true },
);

beforeEach(() => {
  window.fetchAPI = jest.fn((date) => {
    if (date instanceof Date && !Number.isNaN(date.getTime())) {
      return ["17:00", "18:00", "19:00"];
    }

    return INITIAL_AVAILABLE_TIMES;
  });
});

afterEach(() => {
  delete window.fetchAPI;
});

test("initializeTimes returns the available times for today", () => {
  const times = initializeTimes();

  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(times).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes returns available times for the selected date", () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: "date_change", date: "2026-03-15" };

  const updatedState = updateTimes(state, action);

  expect(window.fetchAPI).toHaveBeenCalledWith(new Date("2026-03-15"));
  expect(updatedState).toEqual(["17:00", "18:00", "19:00"]);
});
