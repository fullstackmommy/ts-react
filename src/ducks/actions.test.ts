import { actions, types } from "./todo";

describe("addTodoItem()", () => {
  it("should contain the right action type", () => {
    const action = actions.addTodoItem("foo");
    expect(action.type).toEqual(types.ADD_TODO_ITEM);
  });

  it("should contain the description in the payload", () => {
    const action = actions.addTodoItem("foo");
    expect(action.payload.description).toEqual("foo");
    expect(action.payload.isCompleted).toEqual(false);
  });
});

describe("removeTodoItem()", () => {
  it("should contain the right action type", () => {
    const action = actions.removeTodoItem("foo");
    expect(action.type).toEqual(types.REMOVE_TODO_ITEM);
  });

  it("should contain the id in the payload", () => {
    const action = actions.removeTodoItem(1);
    expect(action.payload.id).toEqual(1);
  });
});

describe("toggleTodoItemStatus()", () => {
  it("should contain the right action type", () => {
    const action = actions.toggleTodoItemStatus(5);
    expect(action.type).toEqual(types.TOGGLE_TODO_ITEM_STATUS);
  });

  it("should contain the description in the payload", () => {
    const action = actions.toggleTodoItemStatus(5);
    expect(action.payload.id).toEqual(5);
  });
});
