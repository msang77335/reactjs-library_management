import React from "react";
import "./BookView.scss";
import ContentTitle from "../../../component/Content/ContentTitle/ContentTitle";
import SearchForm from "../../../component/Form/SearchForm/SearchForm";
import useFetch from "../../../hooks/useFetch";
import bookApi from "../../../api/bookApi";
import { Link } from "react-router-dom";

function BookView(props) {
   const [books, isLoading, error] = useFetch(bookApi.getAll);
   if (isLoading == true) return <p>Loading.....</p>;
   return (
      <div className="content__container book">
         <ContentTitle title="Book" />
         <div>
            <SearchForm />
            <ul className="book__list">
               {books.map((book) => (
                  <li className="book__item">
                     <Link to={`/book/${book.id}`}>
                        <div className="book__item-content">
                           <div className="book__item-imgbox">
                              <img
                                 src={book.img}
                                 alt=""
                                 className="book__item-img"
                              />
                           </div>
                           <div className="book__item-info">
                              <h3 className="book__item-name">{book.name}</h3>
                              <p className="book__item-author">{book.author}</p>
                           </div>
                        </div>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default BookView;
