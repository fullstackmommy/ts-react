export const types = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_ITEM_STATUS: "TOGGLE_TODO_ITEM_STATUS",
};

export const actions = {
  addTodoItem(description: string) {
    return {
      type: types.ADD_TODO_ITEM,
      payload: {
        description,
        isCompleted: false,
      },
    };
  },
  removeTodoItem(description: string) {
    return {
      type: types.REMOVE_TODO_ITEM,
      payload: {
        description,
      },
    };
  },
  toggleTodoItemStatus(id: num) {
    return {
      type: types.TOGGLE_TODO_ITEM_STATUS,
      payload: {
        id,
      },
    };
  },
};
