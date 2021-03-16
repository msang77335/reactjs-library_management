import React from "react";
import "./BookInfo.scss";
import { useParams } from "react-router-dom";
import moment from "moment";
import ContentTitle from "../../../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../../../hooks/useFetch";
import bookApi from "../../../../api/bookApi";
import Button from "../../../../component/Button/Button";

function BookInfo(props) {
   const { id } = useParams();
   const [book, isLoading, error] = useFetch(() => bookApi.get(id));
   if (isLoading == true) return <p>Loading...</p>;
   return (
      <div className="book-info content__container">
         <ContentTitle title="Book Info" />
         <div className="book">
            <div className="book__imgbox">
               <img src={book.img} alt="" className="book__img" />
            </div>
            <div className="book__info">
               <h3 className="book__name">{book.name}</h3>
               <div className="book__info-item">
                  <p>Author:</p>
                  <span>{book.author}</span>
               </div>
               <div className="book__info-item">
                  <p>Publisher:</p>
                  <span>{book.publisher}</span>
               </div>
               <div className="book__info-item">
                  <p>Publishing:</p>
                  <span>{moment(book.publishing_at).format("L")}</span>
               </div>
               <div className="book__info-item">
                  <p>Category:</p>
                  <span>{book.category.label}</span>
               </div>
               <Button className="btn--primary">Add To Cart</Button>
               <p>{book.description}</p>
            </div>
         </div>
      </div>
   );
}

export default BookInfo;
