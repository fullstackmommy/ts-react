import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { TodoContainer } from "./TodoContainer";
import { reducer as todoReducer } from "../ducks/todo";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";

const renderWithRedux = (
  component,
  { initialState, store = createStore(todoReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

describe("TodoContainer", () => {
  it("should display header", () => {
    const { getByText } = renderWithRedux(<TodoContainer />);

    expect(getByText(/todo list/i)).toBeInTheDocument();
  });

  it("should have learn React as initial state", () => {
    const { getByText } = renderWithRedux(<TodoContainer />);
    expect(getByText(/learn react/i)).toBeInTheDocument();
  });

  it("should add a new todo item", () => {
    const { getByText, getByTestId } = renderWithRedux(<TodoContainer />);
    let newItem = "Learn Redux";
    fireEvent.change(getByTestId("newTodoInputField"), {
      target: { value: newItem },
    });

    fireEvent.click(getByTestId("addBtn"));

    expect(getByText(/learn redux/i)).toBeInTheDocument();
  });

  it("should delete selected todo item", () => {
    const { queryByText, getByText, getByTestId } = renderWithRedux(
      <TodoContainer />
    );
    expect(getByText(/learn react/i)).toBeInTheDocument();

    fireEvent.click(getByTestId("deleteItemBtn-1"));
    expect(queryByText(/learn react/i)).not.toBeInTheDocument();
  });

  it("should toggle selected todo item", () => {
    const { getByText } = renderWithRedux(<TodoContainer />);
    const selectedItem = getByText(/learn react/i);

    fireEvent.click(selectedItem);
    expect(selectedItem).toHaveStyle("text-decoration: line-through");
  });
});
