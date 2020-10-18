import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
export default TodoList;
