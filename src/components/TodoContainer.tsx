import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { actions as todoActions } from "../ducks/todo";

export function TodoContainer({ items, toggleStatus }) {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList items={items} handleClick={toggleStatus} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleStatus: (id: number) => {
    console.log("clicked");
    dispatch(todoActions.toggleTodoItemStatus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
