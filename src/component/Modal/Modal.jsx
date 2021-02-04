import React, { useEffect, useRef } from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

Modal.prototype = {
   isOpen: PropTypes.bool,
   closeModal: PropTypes.func,
   title: PropTypes.string,
};

function Modal(props) {
   const { isOpen, closeModal, title, children } = props;
   const modalRef = useRef();
   useEffect(() => {
      const handleOutSide = (event) => {
         if (!modalRef.current.contains(event.target)) {
            closeModal();
         }
      };
      document.addEventListener("mousedown", handleOutSide);
      return () => {
         document.removeEventListener("mousedown", handleOutSide);
      };
   });
   return (
      <div className={isOpen == true ? "modal open" : "modal"}>
         <div ref={modalRef} className="modal-box">
            <h3 className="modal__title">{title}</h3>
            {children}
         </div>
      </div>
   );
}

export default Modal;
