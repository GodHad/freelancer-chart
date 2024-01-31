import {
  SOCKET_CONNECT,
  SOCKET_CONNECT_ERROR,
  SOCKET_CONNECT_SUCCESS,
  socketActionTypes
} from "./actionTypes";

export default (state = null, action: socketActionTypes) => {
  switch (action.type) {
    case SOCKET_CONNECT:
        console.log('Socket is connecting WSS.')
        return state;
    case SOCKET_CONNECT_SUCCESS:
        console.log('Socket connect successfully.')
        return action.payload;
    case SOCKET_CONNECT_ERROR:
        console.log('Socket connect Error');
        return null;
    default:
      return state;
  }
};
