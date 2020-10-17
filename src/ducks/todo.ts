export const types = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_ITEM_STATUS: "TOGGLE_TODO_ITEM_STATUS",
};

interface Payload {
  id?: number;
  description?: string;
  isCompleted?: boolean;
}

interface Actions {
  type: string;
  payload: Payload;
}

interface TodoItem {
  id: number;
  description: string;
  isCompleted: boolean;
}

type State = TodoItem[];

function getId(state): number {
  return state.length + 1;
}

export function reducer(state: State, action: Actions) {
  switch (action.type) {
    case types.ADD_TODO_ITEM:
      let newTodo = {
        id: getId(state),
        description: action.payload.description,
        isCompleted: false,
      };

      return [...state, newTodo];
    case types.REMOVE_TODO_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    case types.TOGGLE_TODO_ITEM_STATUS:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
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
