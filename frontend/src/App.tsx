import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Intro from "./components/Intro";
import UnreadBlogs from "./components/blogs/UnreadBlogs";
import BidLists from "./components/bids/BidLists";
import { isAuthenticated } from "./utils/isAuthenticated";
import MainContent from "./layout/MainContent";

const PrivateRoute: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="bg-gray-800">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Intro />} />
              <Route path="/main" element={<MainContent />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
