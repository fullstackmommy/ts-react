import React from "react";
import { TodoItem as TodoItemType } from "../common/interface/types";

function TodoItem({
  item,
  toggleStatus,
  removeTodoItem,
}: {
  item: TodoItemType;
  toggleStatus: (id: number) => void;
  removeTodoItem: (id: number) => void;
}) {
  return (
    <li
      data-testid="todoItem"
      style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
      onClick={() => toggleStatus(item.id)}
    >
      {item.description}
      <button
        type="button"
        data-testid={`deleteItemBtn-${item.id}`}
        onClick={() => removeTodoItem(item.id)}
      >
        &times;
      </button>
    </li>
  );
}
export default TodoItem;
