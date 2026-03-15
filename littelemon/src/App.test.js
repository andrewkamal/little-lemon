import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock(
  "react-router-dom",
  () => {
    const React = require("react");

    return {
      BrowserRouter: ({ children }) => <>{children}</>,
      Routes: ({ children }) => <>{children}</>,
      Route: ({ element }) => element,
      useNavigate: () => jest.fn(),
      Link: ({ to, children, ...props }) => (
        <a href={to} {...props}>
          {children}
        </a>
      ),
    };
  },
  { virtual: true },
);

test("renders the reservations navigation link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /reserve a table/i });
  expect(linkElement).toBeInTheDocument();
});
