import { SAVE_USER, GET_USER_FAIL, LOG_OUT } from "../actions/actionType";

const initialState = {
   currentUser: null,
};

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SAVE_USER:
         return { ...state, currentUser: action.payload };
      case GET_USER_FAIL:
         return { ...state, currentUser: null };
      case LOG_OUT:
         return { ...state, currentUser: null };
      default:
         return state;
   }
};
