import React from "react";
import TodoItem from "./TodoItem";
import { TodoItem as TodoItemType } from "../common/interface/types";
import styles from "./TodoList.module.css";

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
    <div className={styles.todoList}>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              item={todo}
              toggleStatus={toggleStatus}
              removeTodoItem={removeTodoItem}
            />
          ))}
    </div>
  );
}

export default TodoList;
