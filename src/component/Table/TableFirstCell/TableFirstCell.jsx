import React from "react";

function TableFirstCell(props) {
   const { children } = props;
   return (
      <div className="table-cell first-cell">
         <p>{children}</p>
      </div>
   );
}

export default TableFirstCell;
