import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BookManage.scss";
import bookApi from "../../api/bookApi";
import Table from "../../component/Table/Table";
import TableCell from "../../component/Table/TableCell/TableCell";
import TableFirstCell from "../../component/Table/TableFirstCell/TableFirstCell";
import TableHead from "../../component/Table/TableHead/TableHead";
import TableLastCell from "../../component/Table/TableLastCell/TableLastCell";
import TableRow from "../../component/Table/TableRow/TableRow";
import ContentTitle from "../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../hooks/useFetch";
//import ModalImportBook from "./ModalImportBook/ModalImportBook";
import Button from "../../component/Button/Button";

function BookManage(props) {
   const [timeUpdate, setTimeUpdate] = useState(new Date());
   const [books, isLoading, error] = useFetch(bookApi.getAll, timeUpdate);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [book, setBook] = useState({});
   const handleImportClick = (book) => {
      setBook(book);
      setIsOpenModal(true);
   };
   const handleCloseModal = () => {
      setIsOpenModal(false);
   };
   const callback = () => {
      setTimeUpdate(new Date());
   };
   if (isLoading == true) return <p>Loading.....</p>;
   return (
      <div className="book-manage content__container">
         <ContentTitle title="Book Manage">
            <Link className="btn btn--success btn-link" to="/books/new">
               <i className="fa fa-plus" aria-hidden="true"></i>New
            </Link>
         </ContentTitle>
         <Table>
            <TableHead
               headingColums={[
                  "Id",
                  "Name",
                  "Categories",
                  "Author",
                  "Quantity",
               ]}
            />
            {books.map((book, index) => (
               <TableRow key={index}>
                  <TableFirstCell>{index + 1}</TableFirstCell>
                  <TableCell className="table-cell__id">{book.id}</TableCell>
                  <TableCell>{book.name}</TableCell>
                  <TableCell>{book.category.label}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.quantity}</TableCell>
                  <TableLastCell>
                     <Link
                        to={`/books/${book.id}`}
                        className="btn btn-link btn--warning"
                     >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                     </Link>
                     <Button
                        className="btn--info"
                        onClick={() => handleImportClick(book)}
                     >
                        <i className="fa fa-download" aria-hidden="true"></i>
                     </Button>
                  </TableLastCell>
               </TableRow>
            ))}
         </Table>
      </div>
   );
}

export default BookManage;
