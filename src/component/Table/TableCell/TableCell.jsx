import React from "react";
import PropTypes from "prop-types";

TableCell.propTypes = {
   className: PropTypes.string,
};

function TableCell(props) {
   const { children, className } = props;
   return (
      <div className={className ? `table-cell ${className}` : "table-cell"}>
         <p>{children}</p>
      </div>
   );
}

export default TableCell;
