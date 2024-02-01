export const SOCKET_CONNECT = "SOCKET_CONNTECT";
export const SOCKET_CONNECT_ERROR = "SOCKET_CONNTECT_ERROR";
export const SOCKET_CONNECT_SUCCESS = "SOCKET_CONNTECT_SUCCESS";

interface SocketConnect {
  type: typeof SOCKET_CONNECT;
}

interface SocketConnectSuccess {
  type: typeof SOCKET_CONNECT_SUCCESS;
  payload: WebSocket;
}

interface SocketConnectError {
  type: typeof SOCKET_CONNECT_ERROR;
}

export type socketActionTypes =
  | SocketConnect
  | SocketConnectSuccess
  | SocketConnectError;

export type socketState = {
    socket: WebSocket | null,
    loading: boolean
};
