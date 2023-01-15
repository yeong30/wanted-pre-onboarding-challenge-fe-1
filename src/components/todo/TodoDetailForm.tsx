import React, { useEffect, useState } from "react";
import Button from "components/button/Button";
import Input from "components/common/input/Input";
import useInput from "lib/hooks/useInput";
import styled from "components/todo/styles/TodoForm.module.css";
import {
  emailValidtor,
  passwordValidtor,
} from "../../lib/utils/validationUtil";

interface TodoDetailFormProps {
  todo: TodoInfo | null;
  onRefresh: () => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSave: ({ title, content, id }: TodoParams) => void;
}
function TodoDetailForm({
  todo,
  onRefresh,
  onDelete,
  onSave,
}: TodoDetailFormProps) {
  const [editMode, setEditMode] = useState(false);
  const titleState = useInput({ validator: emailValidtor });
  const contentStaet = useInput({ validator: passwordValidtor });

  useEffect(() => {
    if (todo) {
      titleState.changeValue(todo.title);
      contentStaet.changeValue(todo.content);
    }
  }, [todo]);

  const changeEditModeHanlder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode((prv) => !prv);
  };

  const saveTodoHanlder = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSave({
      title: titleState.enteredValue,
      content: contentStaet.enteredValue,
      id: todo?.id,
    });
    changeEditModeHanlder(e);
  };

  if (!todo) {
    return <div />;
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
      <div className={styled.btnSection}>
        {!editMode ? (
          <>
            <Button
              styled={`${styled.deleteBtn} ${styled.btn}`}
              title="삭제 하기"
              onPress={onDelete}
            />

            <Button
              styled={`${styled.editBtn} ${styled.btn}`}
              title="수정 하기"
              onPress={changeEditModeHanlder}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </form>
  );
}

export default TodoDetailForm;
