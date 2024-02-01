import {
  SOCKET_CONNECT,
  SOCKET_CONNECT_ERROR,
  SOCKET_CONNECT_SUCCESS,
  socketActionTypes
} from "./actionTypes";

export const initialSocketReducer = {
    socket: null,
    loading: false
}

export default (state = initialSocketReducer, action: socketActionTypes) => {
  switch (action.type) {
    case SOCKET_CONNECT:
        console.log('Socket is connecting WSS.')
        return {...state, loading: true};
    case SOCKET_CONNECT_SUCCESS:
        console.log('Socket connect successfully.')
        return {...state, socket: action.payload};
    case SOCKET_CONNECT_ERROR:
        console.log('Socket connect Error');
        return initialSocketReducer;
    default:
      return state;
  }
};
