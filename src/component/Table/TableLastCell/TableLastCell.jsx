import React from "react";

function TableLastCell(props) {
   const { children } = props;
   return <div className="table-cell last-cell">{children}</div>;
}

export default TableLastCell;
