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
    <tr key={item.id}>
      <td
        data-testid="todoItem"
        style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
        onClick={() => toggleStatus(item.id)}
      >
        {item.description}
      </td>
      <td>
        <button
          type="button"
          data-testid={`deleteItemBtn-${item.id}`}
          onClick={() => removeTodoItem(item.id)}
        >
          &times;
        </button>
      </td>
    </tr>
  );
}
export default TodoItem;
