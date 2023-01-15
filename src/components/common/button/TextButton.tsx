import React from "react";
import classes from "./TextButton.module.css";

interface TextButtonnProps {
  title: string;
  onPress: () => void;
  styled?: string;
}
function TextButton({ title, onPress, styled }: TextButtonnProps) {
  const buttonClassName = `${classes["button"]} ${styled}`;
  return (
    <button onClick={onPress} className={buttonClassName}>
      {title}
    </button>
  );
}

export default TextButton;
