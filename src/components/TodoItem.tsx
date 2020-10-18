import React from "react";

function TodoItem({ item }) {
  return (
    <li
      data-testid="todoItem"
      style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
    >
      {item.description}
    </li>
  );
}
export default TodoItem;
