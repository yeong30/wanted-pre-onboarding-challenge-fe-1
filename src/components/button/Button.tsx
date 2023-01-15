import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  onPress: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styled?: string;
  disabled?: boolean;
}
function Button({ title, onPress, styled, disabled = false }: ButtonProps) {
  const buttonClassName = `${styles["button"]} ${styled} ${
    disabled && styles.disabled
  }`;
  return (
    <button disabled={disabled} onClick={onPress} className={buttonClassName}>
      {title}
    </button>
  );
}

export default Button;
