import React from "react";
import { NavLink } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import "./Navbar.scss";

function Navbar(props) {
   return (
      <ul className="navbar">
         <li className="navbar__item">
            <NavLink
               exact
               to="/"
               className="navbar__link"
               activeClassName="active"
            >
               <i className="fa fa-home" aria-hidden="true"></i>
               <span>Home</span>
            </NavLink>
         </li>
         <li className="navbar__item">
            <NavLink
               exact
               to="/book"
               className="navbar__link"
               activeClassName="active"
            >
               <i className="fa fa-home" aria-hidden="true"></i>
               <span>Book</span>
            </NavLink>
         </li>
         <li className="navbar__item">
            <DropDown
               name="Books Management"
               icon="fa fa-book"
               listItem={[
                  {
                     name: "Books",
                     link: "books",
                  },
                  {
                     name: "Categories",
                     link: "book-categories",
                  },
               ]}
            />
         </li>
         <li className="navbar__item">
            <DropDown
               name="Account Management"
               icon="fa fa-book"
               listItem={[
                  {
                     name: "Reader Awaiting",
                     link: "reader-awaiting",
                  },
                  {
                     name: "Reader",
                     link: "readers",
                  },
                  {
                     name: "Employee",
                     link: "employee",
                  },
               ]}
            />
         </li>
      </ul>
   );
}

export default Navbar;
