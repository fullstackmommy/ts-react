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

  const toggleStatus = jest.fn();
  const removeTodoItem = jest.fn();

  it("should display item description and status", () => {
    
    const { getByText } = render(
          <TodoItem
            item={item}
            toggleStatus={toggleStatus}
            removeTodoItem={removeTodoItem}
          />)
    const todoItem = getByText(/item 1/i);
    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  it("should call toggleStatus function when the item is clicked", () => {
    const { getByText } = render(
      <TodoItem
        item={item}
        toggleStatus={toggleStatus}
        removeTodoItem={removeTodoItem}
      />)

    const todoItem = getByText(/item 1/i);

    fireEvent.click(todoItem);
    expect(toggleStatus.mock.calls.length).toEqual(1);
  });

  it("should call removeTodo callback function when the delete button is clicked", () => {
    const { getByTestId } = render(
      <TodoItem
        item={item}
        toggleStatus={toggleStatus}
        removeTodoItem={removeTodoItem}
      />)

    const deleteButton = getByTestId(`deleteItemBtn-${item.id}`);
    fireEvent.click(deleteButton);
    expect(removeTodoItem.mock.calls.length).toEqual(1);
  });
});
