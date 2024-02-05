import { ThunkAction } from "redux-thunk";
import {
  AuthState,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SET_USER,
} from "./actionTypes";
import { Action } from "redux";
import axios from "axios";
import { User } from "./User";

export const LoginUser =
  ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): ThunkAction<Promise<null>, AuthState, null, Action<string>> =>
  (dispatch) =>
    new Promise((resolve) => {
      axios.post("/auth/login", { email, password }).then((res) => {
        const { success } = res.data;
        if (success) {
          const { user, jwtToken } = res.data;
          const loggedUser = new User(user);
          window.localStorage.setItem("jwtToken", jwtToken);
          dispatch({ type: LOGIN_USER, payload: loggedUser });
          resolve(null);
        }
      });
    });

export const RegisterUser =
  ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }): ThunkAction<Promise<null>, AuthState, null, Action<string>> =>
  (dispatch) =>
    new Promise((resolve) => {
      axios
        .post("/auth/register", { username, email, password })
        .then((res) => {
          const { success } = res.data;
          if (success) {
            const { user, jwtToken } = res.data;
            window.localStorage.setItem("jwtToken", jwtToken);
            const registerUser = new User(user);
            dispatch({ type: REGISTER_USER, payload: registerUser });
            resolve(null);
          }
        });
    });

export const LogoutUser =
  (): ThunkAction<Promise<null>, AuthState, null, Action<string>> =>
  (dispatch) =>
    new Promise((resolve) => {
      localStorage.removeItem("jwtToken");
      dispatch({ type: LOGOUT_USER });
      resolve(null);
    });

export const SetUser =
  (user: User): ThunkAction<void, AuthState, null, Action<string>> =>
  (dispatch) => {
    dispatch({ type: SET_USER, payload: user });
  };
