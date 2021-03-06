import { actions, reducer } from "./todo";

describe("Todo Reducer", () => {
  const oldState = {
    todos: [
      {
        id: 1,
        description: "item 1",
        isCompleted: false,
      },
      {
        id: 2,
        description: "item 2",
        isCompleted: true,
      },
    ],
  };

  it("should add a new todo item", () => {
    const newState = reducer({ todos: [] }, actions.addTodoItem("new item"));

    expect(newState.todos[0].id).toEqual(1);
    expect(newState.todos[0].description).toEqual("new item");
    expect(newState.todos[0].isCompleted).toEqual(false);
  });

  it("should remove selected todo item", () => {
    const newState = reducer(oldState, actions.removeTodoItem(1));

    expect(newState.todos.length).toEqual(1);
  });

  it("should toggle the status of selected todo item", () => {
    const newState = reducer(oldState, actions.toggleTodoItemStatus(1));

    expect(newState.todos[0].isCompleted).toEqual(true);
  });
});
