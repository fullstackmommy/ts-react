import React from "react";
import TodoList from "./TodoList";
import { actions as todoActions } from "../ducks/todo";
import { State } from "../common/interface/types";
import { NewTodo } from "./NewTodo";
import { useSelector, useDispatch } from "react-redux";
import styles from "./TodoContainer.module.css";

export const TodoContainer = () => {
  const todos = useSelector<State, State["todos"]>((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoItem = (description: string) => {
    dispatch(todoActions.addTodoItem(description));
  };

  const toggleStatus = (id: number) => {
    dispatch(todoActions.toggleTodoItemStatus(id));
  };

  const removeTodoItem = (id: number) => {
    dispatch(todoActions.removeTodoItem(id));
  };

  return (
    <React.Fragment>
      <h1 className={styles.header}>Todo List</h1>
      <div className={styles.todoContainer}>
        <NewTodo addTodoItem={addTodoItem} />
        <TodoList
          todos={todos}
          toggleStatus={toggleStatus}
          removeTodoItem={removeTodoItem}
        />
      </div>
    </React.Fragment>

  );
};

export default TodoContainer;
