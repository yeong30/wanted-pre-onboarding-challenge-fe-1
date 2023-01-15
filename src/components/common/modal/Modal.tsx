import React from "react";
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";
interface ModalProps {
  children: React.ReactNode;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}
function Modal({ children, onClose }: ModalProps) {
  const ModalContentNode = (
    <ModalContent onClose={onClose} children={children} />
  );

  const rootSection = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(ModalContentNode, rootSection);
}

export default Modal;
