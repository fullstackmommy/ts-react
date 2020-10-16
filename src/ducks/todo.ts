export const types = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
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
};