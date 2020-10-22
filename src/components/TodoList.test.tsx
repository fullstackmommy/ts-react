import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";
import "@testing-library/jest-dom/extend-expect";

describe("TodoList", () => {
  const toggleStatus = jest.fn();
  const removeTodoItem = jest.fn();

  const todos = [
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

  it("should display all the todo items", () => {
    const { getByText } = render(
      <TodoList
        todos={todos}
        toggleStatus={toggleStatus}
        removeTodoItem={removeTodoItem}
      />
    );

    expect(getByText(/item 1/i)).toBeInTheDocument();
    expect(getByText(/item 2/i)).toBeInTheDocument();
  });
});
