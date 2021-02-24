import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../actions";
import PropTypes from "prop-types";
import "./Header.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

Header.propTypes = {};

function Header(props) {
   const dispatch = useDispatch();
   const history = useHistory();
   function handleToggleClick() {
      props.handleClick();
   }
   const handleLogoutClick = () => {
      dispatch(logOutUser());
      history.push("/login");
   };
   return (
      <header className="header">
         <div className="header__left">
            <button className="toggle" onClick={handleToggleClick}>
               <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <Logo></Logo>
         </div>
         <div className="header__right">
            <Button onClick={handleLogoutClick} className="header__logout">
               <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
            </Button>
         </div>
      </header>
   );
}

export default Header;
