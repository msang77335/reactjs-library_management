import React from "react";
import Button from "../../../Button/Button";
import "../FormActions.scss";
import PropTypes from "prop-types";

FormActionSave.propTypes = {
   cancelClick: PropTypes.func,
   saveClick: PropTypes.func,
};

function FormActionSave(props) {
   const { cancelClick, saveClick } = props;
   return (
      <div className="form-actions__save">
         <Button className="btn--primary" type="submit">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>Save
         </Button>
         <Button onClick={cancelClick} type="button" className="btn--danger">
            <i className="fa fa-ban" aria-hidden="true"></i>Cancel
         </Button>
      </div>
   );
}

export default FormActionSave;
