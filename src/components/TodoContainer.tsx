import React from "react";
import TodoList from "./TodoList";

function TodoContainer({ items }) {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList items={items} />
    </div>
  );
}
export default TodoContainer;
