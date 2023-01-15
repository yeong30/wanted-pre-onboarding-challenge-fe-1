import React, { useMemo, useState } from "react";
import Button from "components/button/Button";
import Modal from "components/common/modal/Modal";
import styled from "components/todo/styles/TodoList.module.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
interface TodoListProps {
  todos: TodoInfo[];
  onSelect: (id: string) => void;
  onRefresh: () => void;
}
function TodoList({ todos, onSelect, onRefresh }: TodoListProps) {
  const [showTodoForm, setShowTodoForm] = useState(false);
  const _renderItem = useMemo(() => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        onSelect={onSelect.bind(null, todo.id)}
      />
    ));
  }, [todos]);

  const showTodoFormHandler = () => {
    setShowTodoForm(true);
  };
  const hideTodoFormHandler = () => {
    setShowTodoForm(false);
  };
  return (
    <div className={styled.todoListContainer}>
      {showTodoForm && (
        <Modal onClose={() => {}}>
          <TodoForm onClose={hideTodoFormHandler} onRefresh={onRefresh} />
        </Modal>
      )}
      <header className={styled.todoListHeader}>
        <span className={styled.todoListTitle}>To Do</span>
        <Button
          title="+"
          onPress={showTodoFormHandler}
          styled={styled.addBtn}
        />
      </header>
      <ul className={styled.todoList}>{_renderItem}</ul>
    </div>
  );
}
export default TodoList;

// https://www.codenary.co.kr/calendar/month
