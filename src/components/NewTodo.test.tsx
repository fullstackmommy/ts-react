import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NewTodo } from "./NewTodo";
import "@testing-library/jest-dom/extend-expect";

describe("NewTodo ", () => {
  test("should add new todo item and call addTodoItem callback prop", () => {
    const addTodoItem = jest.fn();
    const { getByTestId, getByText } = render(<NewTodo addTodoItem={addTodoItem} />);

    let newItem = "Get Milk";
    fireEvent.change(getByTestId("newTodoInputField"), {
      target: { value: newItem },
    });
    
    fireEvent.click(getByText(/add todo/i));

    expect(addTodoItem).toBeCalledWith(newItem);
    expect(addTodoItem).toHaveBeenCalledTimes(1);
  });
});
