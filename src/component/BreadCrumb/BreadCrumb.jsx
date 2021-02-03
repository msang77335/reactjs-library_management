import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./BreadCrumb.scss";

function BreadCrumb(props) {
   const location = useLocation();
   const { pathname } = location;
   const pathnames = pathname.split("/").filter((item) => item);
   return (
      <div className="breadcrumb">
         <ul className="breadcrumb__list">
            {pathnames.length > 0 ? (
               <li className="breadcrumb__item">
                  <Link to="/" className="breadcrumb__item-link">
                     Home
                  </Link>
                  <span>
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
               </li>
            ) : (
               <li className="breadcrumb__item">
                  <p>Home</p>
               </li>
            )}
            {pathnames.map((name, index) => {
               name = name.split("-").join(" ");
               const roueTo = `/${pathnames.slice(0, index + 1).join("/")}`;
               const isLast = index === pathnames.length - 1;
               return isLast ? (
                  <li key={index} className="breadcrumb__item">
                     <p>{name}</p>
                  </li>
               ) : (
                  <li key={index} className="breadcrumb__item">
                     <Link to={roueTo} className="breadcrumb__item-link">
                        {name}
                     </Link>
                     <span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                     </span>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default BreadCrumb;
