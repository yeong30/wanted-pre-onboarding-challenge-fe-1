import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import AuthPage from "./pages/auth/SignInPage";
import ToDoPage from "./pages/todo/ToDoPage";
import SignUpPage from "./pages/auth/SignUpPage";
import { QueryClientProvider } from "react-query";
import client from "queries/queryClinet";
import TodoDetailForm from "components/todo/TodoDetailForm";
import withAuth from "lib/hoc/auth/withAuth";

const WithAuthTodoPage = withAuth(ToDoPage);

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WithAuthTodoPage />}>
            <Route path=":id" element={<TodoDetailForm />} />
          </Route>
          <Route path="auth/*" element={<AuthPage />} />
          <Route path="auth/register" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
