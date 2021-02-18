import React from "react";
import "./NewBook.scss";
import BookForm from "../../../component/Form/BookForm/BookForm";
import ContentTitle from "../../../component/Content/ContentTitle/ContentTitle";

function NewBook(props) {
   return (
      <div className="new-book content__container">
         <ContentTitle title="New Book"></ContentTitle>
         <BookForm></BookForm>
      </div>
   );
}

export default NewBook;
