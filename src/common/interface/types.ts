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
