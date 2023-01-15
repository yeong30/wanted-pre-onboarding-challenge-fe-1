import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import AuthPage from "./pages/auth/AuthPage";
import ToDoPage from "./pages/todo/ToDoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
