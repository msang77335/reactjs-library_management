import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

Button.propTypes = {
   className: PropTypes.string,
   onClick: PropTypes.func,
};

function Button(props) {
   const { className, onClick, children, ...buttonProps } = props;
   return (
      <button
         {...buttonProps}
         className={"btn" + " " + className}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export default Button;
