import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./Content.scss";
import PropTypes from "prop-types";

Content.prototype = {
   className: PropTypes.string,
};

function Content(props) {
   const { className } = props;
   return (
      <div className={"content" + " " + className}>
         <BreadCrumb></BreadCrumb>
         {props.children}
      </div>
   );
}

export default Content;
