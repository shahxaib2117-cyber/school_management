// Modal.jsx
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50">
      <div className={`bg-white p-6 rounded-xl shadow-lg relative ${className}`} >
        <button onClick={onClose} 
        className="absolute top-2 right-2 text-gray-500 hover:font-semibold hover:text-gray-700">
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
