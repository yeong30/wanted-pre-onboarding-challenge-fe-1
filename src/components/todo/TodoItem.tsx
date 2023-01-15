import React from "react";
import styled from "components/todo/styles/TodoList.module.css";
interface TodoItemProps {
  onSelect: () => void;
  id: string;
  title: string;
}

function TodoItem({ onSelect, id, title }: TodoItemProps) {
  return (
    <li onClick={onSelect} className={styled.todoItem} id={id}>
      {title}
    </li>
  );
}

export default TodoItem;
