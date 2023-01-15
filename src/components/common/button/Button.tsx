import React, { useMemo } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  onPress: () => void;
  styled?: string;
  disabled?: boolean;
}
function Button({ title, onPress, styled, disabled = false }: ButtonProps) {
  const buttonClassName = useMemo(
    () => `${styles["button"]} ${styled} ${disabled && styles.disabled}`,
    [styled, disabled]
  );
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onPress}
      className={buttonClassName}
    >
      {title}
    </button>
  );
}

export default Button;
