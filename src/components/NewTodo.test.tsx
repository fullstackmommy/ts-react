import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NewTodo } from "../NewTodo";
import "@testing-library/jest-dom/extend-expect";

describe("NewTodo ", () => {
  test("should add new todo item and call addTodoItem callback prop", () => {
    const addTodoItem = jest.fn();
    const { getByTestId } = render(<NewTodo addTodoItem={addTodoItem} />);

    let newItem = "Get Milk";
    fireEvent.change(getByTestId("newTodoInputField"), {
      target: { value: newItem },
    });
    getByTestId("addBtn").click();

    expect(addTodoItem).toBeCalledWith(newItem);
    expect(addTodoItem).toHaveBeenCalledTimes(1);
  });
});
