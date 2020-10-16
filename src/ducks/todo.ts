export const types = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_ITEM_STATUS: "TOGGLE_TODO_ITEM_STATUS",
};

const DEFAULT_STATE = {
  items: [
    {
      id: 1,
      description: "learn React",
      isCompleted: false,
    },
  ],
};

function getId(state): number {
  return state.items.length + 1;
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.ADD_TODO_ITEM:
      let newTodo = {
        id: getId(state),
        description: action.payload.description,
        isCompleted: false,
      };

      return { ...state, items: [...state.items, newTodo] };
    case types.REMOVE_TODO_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case types.TOGGLE_TODO_ITEM_STATUS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
}

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
  removeTodoItem(id: number) {
    return {
      type: types.REMOVE_TODO_ITEM,
      payload: {
        id,
      },
    };
  },
  toggleTodoItemStatus(id: number) {
    return {
      type: types.TOGGLE_TODO_ITEM_STATUS,
      payload: {
        id,
      },
    };
  },
};
