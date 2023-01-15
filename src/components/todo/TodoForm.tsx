import React from "react";
import Button from "components/button/Button";
import Input from "components/common/input/Input";
import useInput from "lib/hooks/useInput";
import styled from "components/todo/styles/TodoForm.module.css";
import { emailValidtor, passwordValidtor } from "lib/utils/validationUtil";
import { createTodo } from "lib/api/todo";

interface TodoFormProps {
  onRefresh: () => void;
  onClose: () => void;
}
function TodoForm({ onRefresh, onClose }: TodoFormProps) {
  const titleState = useInput({ validator: emailValidtor });
  const contentStaet = useInput({ validator: passwordValidtor });

  const registerTodoHanlder = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const result = await createTodo({
      title: titleState.enteredValue,
      content: contentStaet.enteredValue,
    });

    if (result.data) {
      onRefresh();
      onClose();
    }
  };

  return (
    <form className={styled.todoFormContainer}>
      <div className={styled.todoFormInner}>
        <Input
          name="title"
          onChange={titleState.changeValue}
          value={titleState.enteredValue}
          onFocus={titleState.focusedValue}
          inputClassName={` ${styled.titleInput}`}
        />
        <textarea
          name="content"
          onChange={contentStaet.changeValue}
          onFocus={contentStaet.changeValue}
          value={contentStaet.enteredValue}
          className={`  ${styled.contentInput}`}
        />
      </div>
      <div className={styled.btnSection}>
        <Button
          styled={`${styled.regBtn} ${styled.btn}`}
          title="등록 하기"
          onPress={registerTodoHanlder}
        />

        <Button
          styled={`${styled.closeBtn} ${styled.btn}`}
          title="닫기"
          onPress={onClose}
        />
      </div>
    </form>
  );
}

export default TodoForm;