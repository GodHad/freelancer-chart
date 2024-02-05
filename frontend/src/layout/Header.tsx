import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import {
  AuthActionTypes,
  AuthState,
} from "../store/reducers/authReducer/actionTypes";
import { useNavigate } from "react-router-dom";
import {
  LogoutUser,
  SetUser,
} from "../store/reducers/authReducer/actions";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { isAuthenticated } from "../utils/isAuthenticated";
import { User } from "../store/reducers/authReducer/User";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const user = useSelector((state: RootState) => state.authReducer);
  const navigate = useNavigate();

  const dispatch =
    useDispatch<ThunkDispatch<AuthState, any, AuthActionTypes>>();
  useEffect(() => {
    if (isAuthenticated()) {
      const token: string | null = localStorage.getItem("jwtToken");
      if (token) {
        const decodedToken: JwtPayload = jwtDecode(token);
        if (decodedToken) {
          const expiry = decodedToken.exp;
          if (expiry) {
            const expiryTime = expiry * 1000 + 3 * 24 * 60 * 60;
            console.log("Token expiry:", expiryTime, new Date().getTime());
            if (expiryTime < new Date().getTime()) dispatch(LogoutUser());
            else dispatch(SetUser(new User(decodedToken)));
          }
        } else {
          console.error("Invalid token format");
        }
      }
    }
  }, []);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800 shadow-white shadow-sm text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
              Freelancer Bid Helper
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-gray-800 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center"></li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  target="_blank">
                  <FontAwesomeIcon size="2xl" icon={faFacebook} />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <Link 
                  to={'/bids'}
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  target="_blank">
                  <FontAwesomeIcon size="2xl" icon={faTwitter} />
                  <span className="lg:hidden inline-block ml-2">Show Sample Bids</span>
                </Link>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/GodHad"
                  target="_blank">
                  <FontAwesomeIcon size="2xl" icon={faGithub} />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
              {!user ? (
                <li className="flex items-center">
                  <Link
                    to={"/login"}
                    className="bg-lightBlue-500 active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button">
                    Sign in
                  </Link>
                </li>
              ) : (
                <>
                  <li className="flex items-center">{user.username}</li>
                  <li className="flex items-center">
                    <button
                      className="bg-lightBlue-500 active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() =>
                        dispatch(LogoutUser()).then(() => navigate("/login"))
                      }>
                      Sign out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
