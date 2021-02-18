import React from "react";
import "./TextAreaGroup.scss";
import classNames from "classnames";

function TextAreaGroup(props) {
   const { innerRef, errors, label, id, isCol, icon, ...textareaProps } = props;
   return (
      <div className="textarea-group">
         <div className={classNames("textarea-group__group", { col: isCol })}>
            {label && (
               <label htmlFor={id} className="textarea-group__lable">
                  {label}:
               </label>
            )}
            <div className="textarea-group__textarea">
               <textarea
                  rows="5"
                  cols="10"
                  ref={innerRef}
                  id={id}
                  {...textareaProps}
               ></textarea>
               <i className={icon} aria-hidden="true"></i>
            </div>
         </div>
         <p className="textarea-group__error">{errors}</p>
      </div>
   );
}

export default TextAreaGroup;
