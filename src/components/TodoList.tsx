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
    <table className={styles.table}>
      <tbody>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              item={todo}
              toggleStatus={toggleStatus}
              removeTodoItem={removeTodoItem}
            />
          ))}
      </tbody>
    </table>
  );
}

export default TodoList;
