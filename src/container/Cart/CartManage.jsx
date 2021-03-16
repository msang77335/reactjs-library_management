import React from "react";
import "./CartManage.scss";
import ContentTitle from "../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../hooks/useFetch";
import bookApi from "../../api/bookApi";
import Button from "../../component/Button/Button";

function CartManage(props) {
   const [books, isLoading, error] = useFetch(bookApi.getAll);
   if (isLoading == true) return <p>Loading.....</p>;
   return (
      <div className="cart-page content__container">
         <ContentTitle title="Cart" />
         <ul className="cart__list">
            {books.map((book) => (
               <li className="cart__item">
                  <div className="cart__item-content">
                     <div className="cart__item-imgbox">
                        <img src={book.img} alt="" className="cart__item-img" />
                     </div>
                     <div className="cart__item-info">
                        <h3 className="cart__item-name">{book.name}</h3>
                        <p className="cart__item-category item__info">
                           Category:
                           <span>{book.category.label}</span>
                        </p>
                        <p className="cart__item-author item__info">
                           Author:
                           <span> {book.author}</span>
                        </p>
                        <p className="cart__item-category item__info">
                           Publisher:
                           <span>{book.publisher}</span>
                        </p>
                     </div>
                  </div>
                  <div>
                     <Button className="btn--danger del">
                        <i className="fa fa-times" aria-hidden="true"></i>
                     </Button>
                  </div>
               </li>
            ))}
         </ul>
         <div className="cart__submit">
            <Button className="btn--primary">Borrow</Button>
         </div>
      </div>
   );
}

export default CartManage;
