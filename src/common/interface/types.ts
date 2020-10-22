import { reducer as todoReducer } from "../../ducks/todo";

export interface Payload {
  id?: number;
  description?: string;
  isCompleted?: boolean;
}

export interface Actions {
  type: string;
  payload: Payload;
}

export interface TodoItem {
  id: number;
  description: string;
  isCompleted: boolean;
}

export type State = { todos: TodoItem[] };

export type AppState = ReturnType<typeof todoReducer>;
