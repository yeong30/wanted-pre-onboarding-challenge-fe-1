import React from "react";
import Button from "components/common/button/Button";
import Input from "components/common/input/Input";
import useInput from "lib/hooks/useInput";
import styled from "components/todo/styles/TodoForm.module.css";
import useAddTodo from "./hooks/useAddTodo";

interface TodoFormProps {
  onClose: () => void;
}
function TodoForm({ onClose }: TodoFormProps) {
  const titleState = useInput({});
  const contentStaet = useInput({});
  const { mutateAsync: addTodoMutate } = useAddTodo();

  const registerTodoHanlder = async () => {
    const result = await addTodoMutate({
      title: titleState.enteredValue,
      content: contentStaet.enteredValue,
    });

    if (result) {
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
          disabled={titleState.isInValid || contentStaet.isInValid}
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
