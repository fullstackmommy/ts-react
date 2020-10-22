import React from "react";
import TodoItem from "./TodoItem";
import { TodoItem as TodoItemType } from "../common/interface/types";

function TodoList({
  todos,
  toggleStatus,
  removeTodoItem,
}: {
  todos: TodoItemType[];
  toggleStatus: (id: number) => void;
  removeTodoItem: (id: number) => void;
}) {
  return (
    <ul>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            toggleStatus={toggleStatus}
            removeTodoItem={removeTodoItem}
          />
        ))}
    </ul>
  );
}

export default TodoList;
