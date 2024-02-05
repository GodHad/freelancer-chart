import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {
  AuthActionTypes,
  AuthState,
} from "../../store/reducers/authReducer/actionTypes";
import { LoginUser } from "../../store/reducers/authReducer/actions";

export default function Login() {
  const dispatch =
    useDispatch<ThunkDispatch<AuthState, any, AuthActionTypes>>();
  const navigate = useNavigate();
  const [states, setStates] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setStates({ ...states, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(
      LoginUser({
        email: states.email,
        password: states.password,
      })
    ).then(() => navigate("/"));
  };

  return (
    <div className="container mx-auto px-4 h-full pt-36 bg-gray-800 border-b text-white">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0 text-black">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-500 text-sm font-bold">
                  Sign in with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button">
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={"/assets/img/github.svg"}
                  />
                  Github
                </button>
                <button
                  className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button">
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={"/assets/img/google.svg"}
                  />
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-400 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={states.email}
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={states.password}
                    onChange={handleInputChange}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}>
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="text-gray-200">
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link to="/register" className="text-gray-200">
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
