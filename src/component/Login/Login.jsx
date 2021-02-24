import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveUser } from "../../actions";
import Button from "../Button/Button";
import "./Login.scss";
import InputGroup from "../InputGroup/InputGroup";
import useInput from "../../hooks/useInput";
import userApi from "../../api/userApi";

function Login(props) {
   const dispatch = useDispatch();
   const history = useHistory();
   const { getMe, signIn } = userApi;
   const [username, handleUsernameChange, resetUsername] = useInput("");
   const [password, handlePasswordChange, resetPassword] = useInput("");
   const { register, handleSubmit, errors } = useForm({
      reValidateMode: "onSubmit",
   });
   const onSubmit = (data) => {
      signIn(data).then((res) => {
         dispatch(saveUser(res));
         history.push("/");
         // localStorage.setItem("accessToken", res.token);
         // getMe().then((response) => {
         //    dispatch(saveUser(response.user));
         // });
      });
   };
   return (
      <div className="login">
         <div className="login__header">
            <p className="login__title">Login</p>
         </div>
         <form
            action=""
            className="login__form"
            onSubmit={handleSubmit(onSubmit)}
         >
            <InputGroup
               name="username"
               placeholder="Username"
               icon="fa fa-user"
               value={username}
               onChange={handleUsernameChange}
               innerRef={register({
                  required: "Username is required.",
               })}
               errors={errors.username ? errors.username.message : ""}
            ></InputGroup>
            <InputGroup
               name="password"
               placeholder="Password"
               type="password"
               icon="fa fa-lock"
               value={password}
               onChange={handlePasswordChange}
               innerRef={register({
                  required: "Password is required.",
               })}
               errors={errors.password ? errors.password.message : ""}
            ></InputGroup>
            <div className="login__submit">
               <Button type="submit" className="btn--primary">
                  Sign in
               </Button>
               <Link to="/forgetpassword" className="login__link">
                  Forgot Password?
               </Link>
            </div>
            <div className="login__bottom">
               <Link to="/register" className="login__link">
                  Sign up now
               </Link>
            </div>
         </form>
      </div>
   );
}

export default Login;
