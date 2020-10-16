import { actions, reducer } from "./todo";

describe("Todo Reducer", () => {
  const oldState = {
    items: [
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
    const newState = reducer({ items: [] }, actions.addTodoItem("new item"));

    expect(newState.items[0].id).toEqual(1);
    expect(newState.items[0].description).toEqual("new item");
    expect(newState.items[0].isCompleted).toEqual(false);
  });

  it("should remove selected todo item", () => {
    const newState = reducer(oldState, actions.removeTodoItem(1));

    expect(newState.items.length).toEqual(1);
  });

  it("should toggle the status of selected todo item", () => {
    const newState = reducer(oldState, actions.toggleTodoItemStatus(1));

    expect(newState.items[0].isCompleted).toEqual(true);
  });
});
