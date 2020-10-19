import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const item = {
    id: 1,
    description: "item 1",
    isCompleted: true,
  };

  const handleClick = jest.fn();

  it("should display item description and status", () => {
    const { getByText } = render(
      <TodoItem item={item} handleClick={handleClick} />
    );

    const todoItem = getByText(/item 1/i);
    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  it("should call handleClick function when the item is clicked", () => {
    const { getByText } = render(
      <TodoItem item={item} handleClick={handleClick} />
    );
    const todoItem = getByText(/item 1/i);

    fireEvent.click(todoItem);
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});
