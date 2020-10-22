import { Actions, State } from "../common/interface/types";

export const types = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_TODO_ITEM_STATUS: "TOGGLE_TODO_ITEM_STATUS",
};

function getId(state: State): number {
  return state.todos.length + 1;
}

export const initialState: State = {
  todos: [{ id: 1, description: "learn react", isCompleted: false }],
};

export function reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case types.ADD_TODO_ITEM:
      let newTodo = {
        id: getId(state),
        description: action.payload.description,
        isCompleted: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case types.REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case types.TOGGLE_TODO_ITEM_STATUS:
      return {
        ...state,
        todos: state.todos.map((item) =>
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
