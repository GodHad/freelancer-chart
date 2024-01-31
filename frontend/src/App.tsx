import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

const App: React.FC = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8003");

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      console.log("Message from server:", event.data);
      // Handle the received message from the server here
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    // Clean up the WebSocket connection when the component is unmounted
    return () => {
    };
  }, []);
  return (
    <Provider store={store}>
      <div className="w-[98%] p-5 box-content bg-gray-800 text-white">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
