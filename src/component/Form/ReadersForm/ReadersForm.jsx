import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "./ReadersForm.scss";
import InputGroup from "../../InputGroup/InputGroup";
import useInput from "../../../hooks/useInput";
import InforGroup from "../../InfoGroup/InfoGroup";
import ImageGroup from "../../ImageGroup/ImageGroup";
import useImage from "../../../hooks/useImage";
import Button from "../../Button/Button";

function ReadersForm(props) {
   const { initValues = {} } = props;
   const history = useHistory();
   const [name, handleNameChange, resetName] = useInput(initValues.name);
   const [userName, handleUserNameChange, resetUserName] = useInput(
      initValues.usename
   );
   const [email, handleEmailChange, resetEmail] = useInput(initValues.email);
   const [phone, handlePhoneChange, resetPhone] = useInput(initValues.phone);
   const [createDate, setCreateDate] = useState(
      moment(initValues.created_at).format("L") || moment().format("L")
   );
   const [valueImg, srcImg, handleImgChange, resetImg] = useImage(
      initValues.img
   );
   const [updateDate, setUpdateDate] = useState(
      moment(initValues.update_at).format("L") || moment().format("L")
   );
   const handleBackClick = () => {
      history.push("/readers/");
   };
   return (
      <form className="readers-form">
         <ul className="readers-form__list">
            <li className="readers-form__item readers-form__date">
               <InforGroup
                  name="Create Date"
                  value={moment(initValues.created_at).format("L")}
               />
               <InforGroup
                  name="Expirated Date"
                  value={moment(initValues.expirated_date).format("L")}
               ></InforGroup>
            </li>
            <li className="readers-form__item readers-form__image">
               <ImageGroup
                  edit={false}
                  name="img"
                  src={srcImg}
                  innerRef={null}
               ></ImageGroup>
            </li>
            <li className="readers-form__item">
               <InputGroup
                  label="Card Id"
                  isCol
                  placeholder="Staffs's Full Name"
                  disabled
                  value={initValues.card_id}
                  name="name"
               ></InputGroup>
            </li>
            <li className="readers-form__item">
               <InputGroup
                  label="Name"
                  isCol
                  placeholder="Staffs's Full Name"
                  disabled
                  value={name}
                  name="name"
               ></InputGroup>
            </li>
            <li className="readers-form__item">
               <InputGroup
                  label="User Name"
                  isCol
                  placeholder="Staffs's User Name"
                  disabled
                  value={initValues.username}
                  name="username"
               ></InputGroup>
            </li>
            <li className="readers-form__item">
               <InputGroup
                  label="Email"
                  isCol
                  placeholder="Staffs's Email"
                  disabled
                  value={email}
                  name="email"
               ></InputGroup>
            </li>
            <li className="readers-form__item">
               <InputGroup
                  label="Phone"
                  isCol
                  placeholder="Staffs's Phone Number"
                  disabled
                  value={phone}
                  type="number"
                  name="phone"
               ></InputGroup>
            </li>
         </ul>
         <div className="readers-form__actions">
            <Button type="button" className="btn--danger">
               <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </Button>
            <Button
               type="button"
               className="btn btn--info"
               onClick={handleBackClick}
            >
               <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
               Back
            </Button>
         </div>
      </form>
   );
}

export default ReadersForm;
