import React, { ChangeEvent, useState } from "react";

interface useInputProps {
  validator?: (value: string) => boolean;
  replacer?: (value: string) => string;
}

const defaultValidator = (value: string) => {
  return !!value.trim().length;
};

const defaultReplacer = (value: string) => {
  return value;
};

const useInput = ({
  validator = defaultValidator,
  replacer = defaultReplacer,
}: useInputProps) => {
  const [value, setValue] = useState("");
  const [isFocuesd, setIsFocused] = useState(false);
  const isInValid = !validator(value);
  const isError = !validator(value) && isFocuesd;

  const changeValueHandler = (
    e: ChangeEvent<HTMLInputElement> | string | ChangeEvent<HTMLTextAreaElement>
  ) => {
    let value = "";
    if (typeof e === "string") {
      value = e;
    } else {
      value = e.target.value;
    }
    const replacedValue = replacer(value);
    setValue(replacedValue);
  };
  const resetValueHandler = () => {
    setValue("");
  };
  const focusValueHandler = () => {
    setIsFocused(true);
  };

  return {
    enteredValue: value,
    changeValue: changeValueHandler,
    reset: resetValueHandler,
    isInValid,
    isError,
    focusedValue: focusValueHandler,
  };
};

export default useInput;
