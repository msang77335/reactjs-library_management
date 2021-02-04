import React from "react";
import PropTypes from "prop-types";

ContentTitle.prototype = {
   title: PropTypes.string,
};

function ContentTitle(props) {
   const { title, children } = props;
   return (
      <div className="content__top">
         <h3 className="content__title">{title}</h3>
         {children}
      </div>
   );
}

export default ContentTitle;
