import { ThunkAction } from "redux-thunk";
import {
  SOCKET_CONNECT,
  SOCKET_CONNECT_ERROR,
  SOCKET_CONNECT_SUCCESS,
  socketActionTypes,
} from "./actionTypes";
import { RootState } from "../..";

export const createConnection =
  (): ThunkAction<void, RootState, null, socketActionTypes> =>
  (dispatch, getState) => {
    try {
      const socketReducer = getState();
      if (socketReducer?.socketReducer === null) {
        dispatch({ type: SOCKET_CONNECT });
        const socket = new WebSocket("ws://localhost:8003");
        socket.onopen = () => {
          dispatch({ type: SOCKET_CONNECT_SUCCESS, payload: socket });
        };
      }
    } catch (error) {
      dispatch({ type: SOCKET_CONNECT_ERROR });
    }
  };
