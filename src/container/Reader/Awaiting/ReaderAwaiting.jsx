import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import accountApi from "../../../api/accountApi";
import "./ReaderAwaiting.scss";
import Table from "../../../component/Table/Table";
import TableCell from "../../../component/Table/TableCell/TableCell";
import TableFirstCell from "../../../component/Table/TableFirstCell/TableFirstCell";
import TableHead from "../../../component/Table/TableHead/TableHead";
import TableLastCell from "../../../component/Table/TableLastCell/TableLastCell";
import TableRow from "../../../component/Table/TableRow/TableRow";
import ContentTitle from "../../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../../hooks/useFetch";
import Button from "../../../component/Button/Button";

function ReaderAwaiting(props) {
   const [timeUpdate, setTimeUpdate] = useState(new Date());
   const [accounts, isLoading, error] = useFetch(accountApi.getAll, timeUpdate);
   const [accountsAwaiting, setAccountAwaiting] = useState([]);
   useEffect(() => {
      if (accounts) {
         const awaitings = accounts.filter((account) => account.awaiting == 1);
         setAccountAwaiting(awaitings);
      }
   }, [accounts]);
   const handleAgreeClick = (account) => {
      const newAccount = {
         ...account,
         awaiting: 0,
      };
      //accountApi.put(newAccount);
      //setTimeUpdate(new Date());
   };
   if (isLoading == true) return <p>Loading.....</p>;
   return (
      <div className="reader-awaiting content__container">
         <ContentTitle title="Reader Awaiting Approval" />
         <Table>
            <TableHead
               headingColums={["Id", "Name", "Username", "Email", "Phone"]}
            />
            {accountsAwaiting.map((account, index) => (
               <TableRow key={index}>
                  <TableFirstCell>{index + 1}</TableFirstCell>
                  <TableCell className="table-cell__id">{account.id}</TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.username}</TableCell>
                  <TableCell>{account.email}</TableCell>
                  <TableCell>{account.phone}</TableCell>
                  <TableLastCell>
                     <Button
                        className="btn--success"
                        onClick={() => handleAgreeClick(account)}
                     >
                        <i className="fa fa-check" aria-hidden="true"></i>
                     </Button>
                  </TableLastCell>
               </TableRow>
            ))}
         </Table>
      </div>
   );
}

export default ReaderAwaiting;
