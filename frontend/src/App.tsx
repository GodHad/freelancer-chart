import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

const App: React.FC = () => {
  
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
