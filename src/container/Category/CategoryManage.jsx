import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./CategoryManage.scss";
import Table from "../../component/Table/Table";
import TableCell from "../../component/Table/TableCell/TableCell";
import TableFirstCell from "../../component/Table/TableFirstCell/TableFirstCell";
import TableHead from "../../component/Table/TableHead/TableHead";
import TableLastCell from "../../component/Table/TableLastCell/TableLastCell";
import TableRow from "../../component/Table/TableRow/TableRow";
import categoryApi from "../../api/categoryApi";
import ContentTitle from "../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../hooks/useFetch";
import Button from "../../component/Button/Button";
import ModalCategory from "./ModalCategory/ModalCategory";

function CategoryManage(props) {
   const [timeUpdate, setTimeUpdate] = useState(new Date());
   const [categories, isLoading, error] = useFetch(
      categoryApi.getAll,
      timeUpdate
   );
   const [isOpenModal, setIsOpenModal] = useState(false);
   const [editForm, setEditForm] = useState(false);
   const [category, setCategory] = useState({});
   const handleEditClick = (category) => {
      setCategory(category);
      setEditForm(true);
      setIsOpenModal(true);
   };
   const handleNewClick = (category) => {
      setEditForm(false);
      setIsOpenModal(true);
   };
   const handleDeleteClick = (id) => {
      categoryApi.delete(id);
      setTimeUpdate(new Date());
   };
   const handleCloseModal = () => {
      setIsOpenModal(false);
      setCategory({});
   };
   const callback = () => {
      setTimeUpdate(new Date());
   };
   if (isLoading == true) return <p>Loading...</p>;
   return (
      <div className="category-manage content__container">
         <ContentTitle title="Categories Manage">
            <Button className=" btn--success" onClick={handleNewClick}>
               <i className="fa fa-plus" aria-hidden="true"></i>New
            </Button>
         </ContentTitle>
         <Table>
            <TableHead headingColums={["Id", "Name", "Date Create"]} />
            {categories.map((category, index) => (
               <TableRow key={index}>
                  <TableFirstCell>{index + 1}</TableFirstCell>
                  <TableCell className="table-cell__id">
                     {category.id}
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>
                     {moment(category.created_at).format("L")}
                  </TableCell>
                  <TableLastCell>
                     <Button
                        to={`/book-categories/${category.id}`}
                        className="btn--warning"
                        onClick={() => handleEditClick(category)}
                     >
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                     </Button>
                     <Button
                        className="btn--danger"
                        onClick={() => handleDeleteClick(category.id)}
                     >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                     </Button>
                  </TableLastCell>
               </TableRow>
            ))}
         </Table>
         <ModalCategory
            isOpen={isOpenModal}
            closeModal={handleCloseModal}
            initCategory={category}
            editForm={editForm}
            saveCallBack={callback}
         ></ModalCategory>
      </div>
   );
}

export default CategoryManage;
