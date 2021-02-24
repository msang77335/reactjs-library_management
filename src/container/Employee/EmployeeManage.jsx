import React, { useEffect, useState } from "react";
import "./EmployeeManage.scss";
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

function EmployeeManage(props) {
   const [timeUpdate, setTimeUpdate] = useState(new Date());
   const [accounts, isLoading, error] = useFetch(accountApi.getAll, timeUpdate);
   const [employees, setEmployees] = useState([]);
   useEffect(() => {
      if (accounts) {
         const employees = accounts.filter(
            (account) => account.role.value != 4
         );
         setEmployees(employees);
      }
   }, [accounts]);
   return (
      <div className="reader-manage content__container">
         <ContentTitle title="Employee" />
         <Table>
            <TableHead
               headingColums={["Id", "Name", "Role", "Email", "Phone"]}
            />
            {employees.map((employee, index) => (
               <TableRow key={index}>
                  <TableFirstCell>{index + 1}</TableFirstCell>
                  <TableCell className="table-cell__id">
                     {employee.id}
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.role.label}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableLastCell>
                     <Link
                        to={`/employee/${employee.id}`}
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

export default EmployeeManage;
