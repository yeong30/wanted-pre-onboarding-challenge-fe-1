import React, { ChangeEvent } from "react";
import classes from "./Input.module.css";

interface CustomInputProps {
  label?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  type?: string;
  disabled?: boolean;
  styled?: string;
}
const Input = (props: CustomInputProps) => {
  const {
    label,
    name,
    type = "text",
    onChange,
    onFocus,
    value,
    inputClassName,
    labelClassName,
    disabled = false,
    styled,
  } = props;
  const inputStyles = `${classes["input__input"]} ${inputClassName}`;
  const labelStyles = `${classes["input__label"]} ${labelClassName}`;

  return (
    <div className={classes["input__container"]}>
      {label && (
        <label className={labelStyles} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        disabled={disabled}
        type={type}
        className={inputStyles}
        id={name}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
    </div>
  );
};
export default Input;
