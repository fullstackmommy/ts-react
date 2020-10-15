import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

it("should render the paragraph", () => {
  const { getByText } = render(<App />);
  expect(getByText("With TDD")).toBeInTheDocument();
});
