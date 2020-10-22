import React, { ChangeEvent, useState } from "react";

interface NewTodoProps {
  addTodoItem(description: string): void;
}

export const NewTodo: React.FC<NewTodoProps> = ({ addTodoItem }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    addTodoItem(todo);
    setTodo("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <input
        data-testid="newTodoInputField"
        aria-label="Add new todo item"
        onChange={handleChange}
        value={todo}
      />
      <button data-testid="addBtn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};
