import { actions, types } from "./todo";

describe("addTodo()", () => {
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
