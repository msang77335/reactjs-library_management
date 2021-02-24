import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./UserAccount.scss";

UserAccount.propTypes = {};

function UserAccount(props) {
   const user = useSelector((state) => state.userReducer.currentUser);
   return (
      <div className="useraccount">
         <div className="useraccount__imgbox">
            <img src={user.img} alt="" className="useraccount__img" />
         </div>
         <div className="useraccount__info">
            <p className="useraccount__name">{user.name}</p>
            <p className="useraccount__role">{user.role.label}</p>
         </div>
      </div>
   );
}

export default UserAccount;
