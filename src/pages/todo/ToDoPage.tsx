import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getTodoById, getTodos, updateTodo } from "lib/api/todo";
import useUser from "lib/hooks/useUser";
import TodoDetailForm from "components/todo/TodoDetailForm";
import TodoList from "components/todo/TodoList";
import styles from "pages/todo/styles/TodoPage.module.css";

function ToDoPage() {
  const { isLogined } = useUser();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState<null | TodoInfo>(null);

  useEffect(() => {
    if (!isLogined()) {
      navigate("/auth");
    } else {
      loadTodoList();
    }
  }, []);

  const loadTodoList = async () => {
    const todosData = await getTodos();
    setTodos(todosData.data);
  };

  const selectTodo = async (id: string) => {
    const todoData = await getTodoById(id);
    setTodo(todoData.data);
  };
  const deleteTodoHanlder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!todo?.id) {
      alert("유효하지 않은 항목입니다.");
      return;
    }
    await deleteTodo(todo.id);
    await loadTodoList();
    setTodo(null);
  };

  const saveTodoHanlder = async ({ title, content, id }: TodoParams) => {
    await updateTodo({
      title,
      content,
      id,
    });

    await loadTodoList();
  };

  return (
    <div className={styles.todo}>
      <TodoList todos={todos} onSelect={selectTodo} onRefresh={loadTodoList} />
      <TodoDetailForm
        onDelete={deleteTodoHanlder}
        onSave={saveTodoHanlder}
        todo={todo}
        onRefresh={loadTodoList}
      />
    </div>
  );
}

export default ToDoPage;
