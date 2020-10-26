import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/react - redux - typescript/i);
  expect(linkElement).toBeInTheDocument();
});
