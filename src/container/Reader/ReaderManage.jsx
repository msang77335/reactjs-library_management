import React, { useEffect, useState } from "react";
import "./ReaderManage.scss";
import { Link } from "react-router-dom";
import Table from "../../component/Table/Table";
import TableCell from "../../component/Table/TableCell/TableCell";
import TableFirstCell from "../../component/Table/TableFirstCell/TableFirstCell";
import TableHead from "../../component/Table/TableHead/TableHead";
import TableLastCell from "../../component/Table/TableLastCell/TableLastCell";
import TableRow from "../../component/Table/TableRow/TableRow";
import ContentTitle from "../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../hooks/useFetch";
import accountApi from "../../api/accountApi";
import Button from "../../component/Button/Button";

function ReaderManage(props) {
   const [timeUpdate, setTimeUpdate] = useState(new Date());
   const [accounts, isLoading, error] = useFetch(accountApi.getAll, timeUpdate);
   const [readers, setReaders] = useState([]);
   useEffect(() => {
      if (accounts) {
         const readers = accounts.filter(
            (account) => account.role.value == 4 && account.awaiting == 0
         );
         setReaders(readers);
      }
   }, [accounts]);
   return (
      <div className="reader-manage content__container">
         <ContentTitle title="Readers Manage" />
         <Table>
            <TableHead
               headingColums={["Id", "Name", "Username", "Email", "Phone"]}
            />
            {readers.map((reader, index) => (
               <TableRow key={index}>
                  <TableFirstCell>{index + 1}</TableFirstCell>
                  <TableCell className="table-cell__id">{reader.id}</TableCell>
                  <TableCell>{reader.name}</TableCell>
                  <TableCell>{reader.username}</TableCell>
                  <TableCell>{reader.email}</TableCell>
                  <TableCell>{reader.phone}</TableCell>
                  <TableLastCell>
                     <Link
                        to={`/readers/${reader.id}`}
                        className="btn btn-link btn--warning"
                     >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                     </Link>
                  </TableLastCell>
               </TableRow>
            ))}
         </Table>
      </div>
   );
}

export default ReaderManage;
