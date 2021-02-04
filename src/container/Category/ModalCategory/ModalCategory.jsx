import React from "react";
import CategoryForm from "../../../component/Form/CategoryForm/CategoryForm";
import Modal from "../../../component/Modal/Modal";
import PropTypes from "prop-types";

ModalCategory.prototype = {
   isOpen: PropTypes.bool,
   closeModal: PropTypes.func,
   initCategory: PropTypes.object,
   saveCallBack: PropTypes.func,
   editForm: PropTypes.bool,
};

function ModalCategory(props) {
   const { isOpen, closeModal, initCategory, saveCallBack, editForm } = props;
   const handleSaveCallBack = () => {
      closeModal();
      saveCallBack();
   };
   return (
      <div>
         <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title={editForm ? "Edit Category" : "New Category"}
         >
            <CategoryForm
               editForm={editForm}
               initCategory={initCategory}
               cancelClick={closeModal}
               saveCallBack={handleSaveCallBack}
            ></CategoryForm>
         </Modal>
      </div>
   );
}

export default ModalCategory;
