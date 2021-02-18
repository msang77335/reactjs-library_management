import React from "react";
import Button from "../../../Button/Button";
import "../FormActions.scss";

function FormActionEdit(props) {
   const { editClick, deleteClick, backClick } = props;
   return (
      <div className="form-actions__detail">
         <Button type="button" className="btn btn--info" onClick={backClick}>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            Back
         </Button>
         <Button type="button" className="btn--danger" onClick={deleteClick}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
         </Button>
         <Button type="button" className="btn--warning" onClick={editClick}>
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
         </Button>
      </div>
   );
}

export default FormActionEdit;
