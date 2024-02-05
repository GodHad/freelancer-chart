import React, { useEffect, useState } from "react";
import BidItem from "./BidItem";
import { Bid } from "../../store/reducers/bidsReducer/Bid";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {
  BidActionTypes,
  BidState,
} from "../../store/reducers/bidsReducer/actionTypes";
import { GetBids } from "../../store/reducers/bidsReducer/actions";
import { Job } from "../../store/reducers/blogsReducer/Blog";

function BidLists() {
  const bidReducer = useSelector((state: RootState) => state.bidReducer);
  const { loading, bids } = bidReducer;
  const skills = useSelector(
    (state: RootState) => state.blogReducer.mainBlog?.jobs_details
  ) as Array<Job>;
  const dispatch = useDispatch<ThunkDispatch<BidState, any, BidActionTypes>>();
  useEffect(() => {
    dispatch(GetBids(skills));
  }, []);
  return (
    <div className="h-screen overflow-y-scroll md:absolute top-1 -left-60 bg-gray-800 text-white flex flex-wrap z-40 shadow-md shadow-white p-5">
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
      ) : bids && bids.length !== 0 ? (
        bids?.map((bid) => <BidItem bid={bid} key={bid._id}/>)
      ) : (
        <h1 className="text-white-100 text-4xl font-bold mt-2 mb-2 leading-tight">
          There's no bid for this post.
        </h1>
      )}
    </div>
  );
}

export default BidLists;
