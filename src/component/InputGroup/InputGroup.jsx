import React from "react";
import PropTypes from "prop-types";
import "./InputGroup.scss";
import classNames from "classnames";

InputGroup.prototype = {
   errors: PropTypes.string,
   label: PropTypes.string,
   id: PropTypes.string,
   icon: PropTypes.string,
   isCol: PropTypes.bool,
};

function InputGroup(props) {
   const { innerRef, errors, label, id, isCol, icon, ...inputProps } = props;
   return (
      <div className="input-group">
         <div className={classNames("input-group__group", { col: isCol })}>
            {label && (
               <label htmlFor={id} className="input-group__lable">
                  {label}:
               </label>
            )}
            <div className="input-group__input">
               <input ref={innerRef} id={id} {...inputProps}></input>
               <i className={icon} aria-hidden="true"></i>
            </div>
         </div>
         <p className="input-group__error">{errors}</p>
      </div>
   );
}

export default InputGroup;
