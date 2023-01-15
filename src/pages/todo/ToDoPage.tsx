import React from "react";
import { Outlet } from "react-router-dom";
import TodoList from "components/todo/TodoList";
import Layout from "components/common/layout/Layout";

function ToDoPage() {
  return (
    <Layout>
      <TodoList />
      <Outlet />
    </Layout>
  );
}

export default ToDoPage;
