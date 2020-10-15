import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn typescript/i);
  expect(linkElement).toBeInTheDocument();
});

it("should render the paragraph", () => {
  const { getByText } = render(<App />);
  expect(getByText("With TDD")).toBeInTheDocument();
});

it("should generate a label", () => {
  const { getByText } = render(<App />);
  expect(getByText(/react/i)).toBeInTheDocument();
});

it("should generate a greeting", () => {
  const { getByText } = render(<App />);
  expect(getByText(/hello jello/i)).toBeInTheDocument();
});
