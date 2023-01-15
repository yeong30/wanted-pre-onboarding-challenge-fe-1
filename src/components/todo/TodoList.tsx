import React, { useCallback, useMemo } from "react";
import Button from "components/common/button/Button";
import Modal from "components/common/modal/Modal";
import styled from "components/todo/styles/TodoList.module.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import useTodos from "./hooks/useTodos";
import useFormModal from "lib/hooks/useModal";
import { useNavigate } from "react-router-dom";
import ErrorAlertView from "components/common/alertView/ErrorAlertView";
import EmptyView from "components/common/alertView/EmptyAlertView";

function TodoList() {
  const todoFormModal = useFormModal();
  const navigation = useNavigate();
  const { todos, error } = useTodos<TodoDetail>();
  //todo : 비로그인 안된 경우 처리 필요

  const seletTodoHanlder = useCallback((id: string) => {
    navigation(id);
  }, []);

  const _renderItem = useMemo(
    () =>
      todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          onSelect={seletTodoHanlder.bind(null, todo.id)}
        />
      )),
    [todos]
  );

  if (error) {
    return <ErrorAlertView error={error} />;
  }
  if (!todos) {
    return <EmptyView />;
  }
  return (
    <div className={styled.todoListContainer}>
      <header className={styled.todoListHeader}>
        <span className={styled.todoListTitle}>To Do</span>
        <Button title="+" onPress={todoFormModal.show} styled={styled.addBtn} />
      </header>
      <ul className={styled.todoList}>{_renderItem}</ul>
      {todoFormModal.isShow && (
        <Modal>
          <TodoForm onClose={todoFormModal.close} />
        </Modal>
      )}
    </div>
  );
}
export default TodoList;
