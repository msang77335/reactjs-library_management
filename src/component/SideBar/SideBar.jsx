import React from "react";
import Navbar from "../Navbar/Navbar";
import "./SideBar.scss";
import UserAccount from "./UserAccount/UserAccount";
import PropTypes from "prop-types";

SideBar.propTypes = {
   className: PropTypes.string,
};

function SideBar(props) {
   const { className } = props;
   return (
      <div className={"sidebar" + " " + className}>
         <UserAccount></UserAccount>
         <Navbar></Navbar>
      </div>
   );
}

export default SideBar;
