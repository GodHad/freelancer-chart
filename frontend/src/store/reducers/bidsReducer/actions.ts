import { ThunkAction } from "redux-thunk";
import { Bid } from "./Bid";
import { BidState, GET_BIDS, SET_LOADING_IN_BID } from "./actionTypes";
import { Action } from "redux";
import axios from "axios";
import { Job } from "../blogsReducer/Blog";

const token = window.localStorage.getItem("jwtToken");

export const GetBids =
  (skillSets: Array<Job>): ThunkAction<void, BidState, null, Action<string>> =>
  (dispatch) => {
    dispatch({ type: SET_LOADING_IN_BID, payload: { loading: true } });
    axios
      .post(
        "/bid/get_bids",
        { skillSets },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const sampleBids = res.data?.bids;
        console.log(sampleBids);
        const bids = sampleBids.map((bid: any) => {
          const newBid = new Bid(bid);
          return newBid;
        });
        dispatch({ type: GET_BIDS, payload: { bids, loading: false } });
      });
  };

export const AddBid = (bid: Bid) => {
  console.log(token);
  axios
    .post(
      "/bid/add_bid",
      { bid },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => console.log("Add Bid."));
};

export const UpdateBid = (bid: Bid) => {
  axios
    .put(
      "/bid/update_bid",
      { bid },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => console.log("Update Bid."));
};

export const DeleteBid = (_id: string) => {
  axios
    .delete(`/bid/delete_bid/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => console.log("Delete Bid."));
};
