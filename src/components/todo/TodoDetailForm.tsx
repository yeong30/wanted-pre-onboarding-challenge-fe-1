import React, { useEffect, useState } from "react";
import Input from "components/common/input/Input";
import useInput from "lib/hooks/useInput";
import styled from "components/todo/styles/TodoForm.module.css";
import { emailValidtor, passwordValidtor } from "lib/utils/validationUtil";
import { useParams } from "react-router-dom";
import useTodo from "./hooks/useTodo";
import Button from "components/common/button/Button";
import useEditTodo from "./hooks/useEditTodo";
import useDeleteTodo from "./hooks/useDeleteTodo";
import ErroPage from "components/common/alertView/ErrorAlertView";

function TodoDetailForm() {
  const id = useParams().id || "";
  const [editMode, setEditMode] = useState(false);
  const titleState = useInput({ validator: emailValidtor });
  const contentStaet = useInput({ validator: passwordValidtor });
  const { todo, error: todoError } = useTodo(id);
  const updateTodo = useEditTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  useEffect(() => {
    if (todo) {
      titleState.changeValue(todo?.title);
      contentStaet.changeValue(todo?.content);
    }
  }, [todo]);

  const changeEditModeHanlder = () => {
    setEditMode((prv) => !prv);
  };

  const saveTodoHanlder = async () => {
    const result = await updateTodo.mutateAsync({
      title: titleState.enteredValue,
      content: contentStaet.enteredValue,
      id,
    });
    if (result) {
      changeEditModeHanlder();
    }
  };

  if (todoError) {
    return <ErroPage error={todoError} />;
  }

  return (
    <form className={styled.todoFormContainer}>
      <div className={styled.todoFormInner}>
        <Input
          disabled={!editMode}
          name="title"
          onChange={titleState.changeValue}
          value={titleState.enteredValue}
          onFocus={titleState.focusedValue}
          inputClassName={`${!editMode && styled.viewModeInput} ${
            styled.titleInput
          }`}
        />
        <textarea
          disabled={!editMode}
          name="content"
          onChange={contentStaet.changeValue}
          onFocus={contentStaet.changeValue}
          value={contentStaet.enteredValue}
          className={`  ${styled.contentInput} ${
            !editMode && styled.viewModeInput
          }`}
        />
      </div>
      {!editMode ? (
        <div className={styled.btnSection}>
          <Button
            styled={`${styled.deleteBtn} ${styled.btn}`}
            title="삭제 하기"
            onPress={deleteTodo.bind(null, id)}
          />

          <Button
            styled={`${styled.editBtn} ${styled.btn}`}
            title="수정 하기"
            onPress={changeEditModeHanlder}
          />
        </div>
      ) : (
        <div className={styled.btnSection}>
          <Button
            styled={`${styled.closeBtn} ${styled.btn}`}
            title="취소"
            onPress={changeEditModeHanlder}
          />
          <Button
            styled={`${styled.editBtn} ${styled.btn}`}
            title="저장 하기"
            onPress={saveTodoHanlder}
          />
        </div>
      )}
    </form>
  );
}

export default TodoDetailForm;
