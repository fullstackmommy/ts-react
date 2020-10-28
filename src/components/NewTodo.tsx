import React, { ChangeEvent, useState } from "react";
import styles from "./NewTodo.module.css";

interface NewTodoProps {
  addTodoItem(description: string): void;
}

export const NewTodo: React.FC<NewTodoProps> = ({ addTodoItem }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodoItem(todo);
    setTodo("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <div className={styles.newTodo}>
      <form onSubmit={handleAddTodo}>      
        <input
          className={styles.newTodoForm}
          data-testid="newTodoInputField"
          aria-label="Add new todo item"
          onChange={handleChange}
          value={todo}
        />
        <button data-testid="addBtn" type="submit">Add Todo</button>
      </form>
    </div>
  );
};
