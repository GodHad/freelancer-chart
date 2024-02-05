import {
  AuthActionTypes,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SET_USER,
} from "./actionTypes";

export const authReducer = (state = null, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    case REGISTER_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
