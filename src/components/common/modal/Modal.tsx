import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";
interface ModalProps {
  children: React.ReactNode;
}
function Modal({ children }: ModalProps) {
  const ModalContentNode = (
    <ModalContent onClose={() => {}} children={children} />
  );

  const rootSection = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(ModalContentNode, rootSection);
}

export default Modal;
