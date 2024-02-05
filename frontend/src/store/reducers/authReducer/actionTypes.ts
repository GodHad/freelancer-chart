import { User } from "./User";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT_USER = "LOGOUT_UESR";
export const SET_USER = "SET_USER";

interface Login {
  type: typeof LOGIN_USER;
  payload: { user: User };
}

interface Register {
  type: typeof REGISTER_USER;
  payload: { user: User };
}

interface Logout {
  type: typeof LOGOUT_USER;
}

interface SetUser {
  type: typeof SET_USER;
  payload: { user: User };
}

export type AuthActionTypes = Login | Register | Logout | SetUser;

export type AuthState = User | null;
