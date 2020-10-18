import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const item = {
    id: 1,
    description: "item 1",
    isCompleted: true,
  };

  it("should display item description and status", () => {
    const { getByText, getByTestId } = render(<TodoItem item={item} />);

    expect(getByText(/item 1/i)).toBeInTheDocument();
    expect(getByTestId("todoItem")).toHaveStyle(
      "text-decoration: line-through"
    );
  });
});
