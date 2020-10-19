import React from "react";
import { render } from "@testing-library/react";
import TodoContainer from "./TodoContainer";
import "@testing-library/jest-dom/extend-expect";

describe("TodoContainer", () => {
  const items = [
    {
      id: 1,
      description: "item 1",
      isCompleted: true,
    },
    {
      id: 2,
      description: "item 2",
      isCompleted: false,
    },
  ];
  it("should display header", () => {
    const { getByText } = render(<TodoContainer items={items} />);

    expect(getByText(/todo list/i)).toBeInTheDocument();
  });
});
