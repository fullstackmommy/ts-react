import React, { ChangeEvent, useState } from "react";
import styles from "./NewTodo.module.css";

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
    <div className={styles.newTodo}>
      <input
        className={styles.newTodoForm}
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
