import React from "react";
import reactDom from "react-dom";
import "./modal.css";

function ModalContainer({ children }) {
  const modalRoot = document.getElementById("modal");

  

  return reactDom.createPortal(
    <div className="modalContainer">{children}</div>,
    modalRoot
  );
}

export default ModalContainer;
