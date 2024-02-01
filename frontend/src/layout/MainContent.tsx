import React, { useEffect } from "react";
import MainBlog from "../components/MainBlog";
import UnreadBlogs from "../components/UnreadBlogs";
import BidLists from "../components/BidLists";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import { createConnection } from "../store/reducers/socketReducer/actions";
import { socketActionTypes } from "../store/reducers/socketReducer/actionTypes";
import { Blog } from "../store/reducers/blogsReducer/Blog";
import { AddBlog } from "../store/reducers/blogsReducer/actions";
import { BlogActionTypes, BlogState } from "../store/reducers/blogsReducer/actionTypes";

function Main() {
  const socket = useSelector((state: RootState) => state.socketReducer.socket);
  const socketDispatch =
    useDispatch<ThunkDispatch<RootState, any, socketActionTypes>>();
  const blogDispatch =
    useDispatch<ThunkDispatch<BlogState, any, BlogActionTypes>>();
  if (socket) {
    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response?.newTask) {
        const task = response.task;
        const newBlog = new Blog(task);
        console.log('New blog', task);
        blogDispatch(AddBlog(newBlog));
      }
    };
  }
  useEffect(() => {
    socketDispatch(createConnection());
  }, [socketDispatch]);

  return (
    <div className="mb-16">
      <div className="mb-5 mt-12 flex flex-wrap md:flex-no-wrap">
        <MainBlog />
        <UnreadBlogs />
      </div>
      <BidLists />
    </div>
  );
}

export default Main;
