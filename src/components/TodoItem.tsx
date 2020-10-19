import React from "react";

function TodoItem({ item, handleClick }) {
  return (
    <li
      data-testid="todoItem"
      style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
      onClick={() => handleClick(item.id)}
    >
      {item.description}
    </li>
  );
}
export default TodoItem;
