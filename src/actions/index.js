import { SAVE_USER, GET_USER_FAIL, LOG_OUT } from "./actionType";

export const saveUser = (user) => {
   return {
      type: SAVE_USER,
      payload: user,
   };
};

export const getUserFali = () => {
   return {
      type: GET_USER_FAIL,
   };
};

export const logOutUser = () => {
   return {
      type: LOG_OUT,
   };
};
