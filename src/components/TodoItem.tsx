import React from "react";
import { TodoItem as TodoItemType } from "../common/interface/types";
import styles from "./TodoItem.module.css";

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
    <div className={styles.todoItem}>
      <div
        data-testid="todoItem"
        style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
        onClick={() => toggleStatus(item.id)}
      >
        {item.description}
      </div>
      <div>
        <button
          type="button"
          data-testid={`deleteItemBtn-${item.id}`}
          onClick={() => removeTodoItem(item.id)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
