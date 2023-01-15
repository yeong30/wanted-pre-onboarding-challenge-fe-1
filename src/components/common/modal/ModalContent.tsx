import React from "react";
import styled from "./Modal.module.css";

interface ModalContentProps {
  children: React.ReactNode;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}
function ModalContent({ children, onClose }: ModalContentProps) {
  return (
    <div onClick={onClose} className={styled.modalBackground}>
      <div className={styled.modalContentSection}>{children}</div>
    </div>
  );
}

export default ModalContent;
