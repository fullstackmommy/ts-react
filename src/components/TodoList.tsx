import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, handleClick }) {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} handleClick={handleClick} />
      ))}
    </ul>
  );
}

export default TodoList;
