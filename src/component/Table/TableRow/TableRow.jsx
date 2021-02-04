import React from "react";

function TableRow(props) {
   const { children } = props;
   return <div className="table-row">{children}</div>;
}

export default TableRow;
