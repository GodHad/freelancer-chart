import React, { useEffect } from "react";
import MainBlog from "../components/MainBlog";
import UnreadBlogs from "../components/UnreadBlogs";
import BidLists from "../components/BidLists";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import { createConnection } from "../store/reducers/socketReducer/actions";
import { socketActionTypes } from "../store/reducers/socketReducer/actionTypes";

function Main() {
  const socket = useSelector((state: RootState) => state.socketReducer);
  const dispatch = useDispatch<ThunkDispatch<RootState, any, socketActionTypes>>();
  if (socket) {
    socket.onmessage = (event) => {
      console.log("Message received: ", JSON.parse(event.data));
    };
  }
  useEffect(() => {
    dispatch(createConnection());
  }, [dispatch]);

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
