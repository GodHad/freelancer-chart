import React, { useEffect, useState } from "react";
import UnreadBlog from "./UnreadBlog";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import {
  BlogActionTypes,
  BlogState,
} from "../../store/reducers/blogsReducer/actionTypes";
import { GetBlogs } from "../../store/reducers/blogsReducer/actions";
import { createConnection } from "../../store/reducers/socketReducer/actions";
import { socketActionTypes } from "../../store/reducers/socketReducer/actionTypes";
import { Blog } from "../../store/reducers/blogsReducer/Blog";
import { AddBlog } from "../../store/reducers/blogsReducer/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function UnreadBlogs() {
  const blogState = useSelector((state: RootState) => state.blogReducer);
  const { loading, blogs } = blogState;
  const blogDispatch =
    useDispatch<ThunkDispatch<BlogState, any, BlogActionTypes>>();
  useEffect(() => {
    blogDispatch(GetBlogs());
  }, []);

  const socket = useSelector((state: RootState) => state.socketReducer.socket);
  const socketDispatch =
    useDispatch<ThunkDispatch<RootState, any, socketActionTypes>>();
  if (socket) {
    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response?.newTask) {
        const task = response.task;
        const newBlog = new Blog(task);
        console.log("New blog", task);
        blogDispatch(AddBlog(newBlog));
      }
    };
  }
  useEffect(() => {
    socketDispatch(createConnection());
  }, [socketDispatch]);
  const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-800 text-white flex flex-wrap items-center justify-between relative md:w-64 z-10 mt-16">
      {loading ? (
        <div
          className="flex justify-center items-center p-4"
          aria-label="Loading..."
          role="status">
          <svg
            width="50"
            height="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin w-6 h-6 stroke-emerald-500">
            <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
          </svg>
        </div>
      ) : (
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer opacity-50 md:hidden px-3 py-3 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("py-3 px-6")}>
            <FontAwesomeIcon size={"lg"} icon={faBars} />
          </button>
          <div
            className={
              "md:flex md:flex-col bg-gray-800 md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }>
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/">
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>
            <h6 className="md:min-w-full text-xl text-bold pl-3 uppercase font-bold block pt-1 pb-4 no-underline">
              Unread Posts
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {blogs.length === 0 ? (
                <h1 className="p-10-100 text-4xl font-bold mt-2 mb-2 leading-tight">
                  There's no new post.
                </h1>
              ) : (
                <>
                  {blogs.map((blog) => (
                    <li className="item-center" key={blog._id}>
                      <UnreadBlog blog={blog} />
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default UnreadBlogs;
