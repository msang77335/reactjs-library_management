import React from "react";
import { useParams } from "react-router-dom";
import BookForm from "../../../component/Form/BookForm/BookForm";
import ContentTitle from "../../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../../hooks/useFetch";
import bookApi from "../../../api/bookApi";

function EditBook(props) {
   const { id } = useParams();
   const [book, isLoading, error] = useFetch(() => bookApi.get(id));
   if (isLoading == true) return <p>Loading...</p>;
   return (
      <div className="new-book content__container">
         <ContentTitle title="Book Detail"></ContentTitle>
         <BookForm editForm initValues={book}></BookForm>
      </div>
   );
}

export default EditBook;
