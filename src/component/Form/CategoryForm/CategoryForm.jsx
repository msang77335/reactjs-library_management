import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import categoryApi from "../../../api/categoryApi";
import useInput from "../../../hooks/useInput";
import InputGroup from "../../InputGroup/InputGroup";
import FormActionSave from "../FormActions/FormActionSave/FormActionSave";
import PropTypes from "prop-types";

CategoryForm.prototype = {
   initCategory: PropTypes.object,
   editForm: PropTypes.bool,
   cancelClick: PropTypes.func,
   saveCallBack: PropTypes.func,
};

function CategoryForm(props) {
   const { initCategory, editForm, cancelClick, saveCallBack } = props;
   const { register, handleSubmit, errors, clearErrors } = useForm({
      reValidateMode: "onSubmit",
   });
   const [category, handleCategoryChange, resetCategory] = useInput(
      initCategory.name
   );
   useEffect(() => {
      resetCategory();
      setTimeout(clearErrors, 1000);
   }, [initCategory]);
   const onSubmit = (data) => {
      if (editForm) {
         const newCategory = {
            ...data,
            id: initCategory.id,
            created_at: initCategory.created_at,
            updated_at: moment(),
         };
         categoryApi.put(newCategory);
      } else {
         const newCategory = {
            ...data,
            updated_at: moment(),
            created_at: moment(),
         };
         categoryApi.post(newCategory);
      }
      saveCallBack();
   };
   return (
      <form className="category-form" onSubmit={handleSubmit(onSubmit)}>
         <InputGroup
            label="Name"
            name="name"
            value={category}
            onChange={handleCategoryChange}
            innerRef={register({
               required: "Category name is required.",
            })}
            errors={errors.name ? errors.name.message : ""}
         ></InputGroup>
         <FormActionSave cancelClick={cancelClick}></FormActionSave>
      </form>
   );
}

export default CategoryForm;
