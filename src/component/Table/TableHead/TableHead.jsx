import React from "react";
import TableCell from "../TableCell/TableCell";
import TableFirstCell from "../TableFirstCell/TableFirstCell";
import TableLastCell from "../TableLastCell/TableLastCell";
import PropTypes from "prop-types";

TableHead.prototype = {
   headingColums: PropTypes.array,
};

function TableHead(props) {
   const { headingColums } = props;
   return (
      <div className="table-head">
         <TableFirstCell>STT</TableFirstCell>
         {headingColums.map((col, index) => {
            return (
               <TableCell
                  className={col == "Id" ? "table-cell__id" : null}
                  key={index}
               >
                  {col}
               </TableCell>
            );
         })}
         <TableLastCell>Actions</TableLastCell>
      </div>
   );
}

export default TableHead;
