import React from "react";
import { Outlet } from "react-router-dom";
import TodoList from "components/todo/TodoList";
import styles from "pages/todo/styles/TodoPage.module.css";

function ToDoPage() {
  return (
    <div className={styles.todo}>
      <TodoList />
      <Outlet />
    </div>
  );
}

export default ToDoPage;
