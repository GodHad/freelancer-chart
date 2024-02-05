import { BlockquoteHTMLAttributes } from "react";
import { Bid } from "./Bid";

export const GET_BIDS = "GET_BIDS";
export const ADD_BID = "ADD_BID";
export const UPDATE_BID = "UPDATE_BID";
export const DELETE_BID = "DELETE_BID";
export const SET_LOADING_IN_BID = "SET_LOADING_IN_BID";

interface GetBids {
  type: typeof GET_BIDS;
  payload: { bids: Array<Bid> };
}

interface AddBid {
  type: typeof ADD_BID;
  payload: { bid: Bid };
}

interface UpdateBid {
  type: typeof UPDATE_BID;
  payload: { bid: Bid };
}

interface DeleteBid {
  type: typeof DELETE_BID;
  payload: { _id: string };
}

interface SetLoading {
  type: typeof SET_LOADING_IN_BID;
  payload: { loading: boolean };
}

export type BidActionTypes = GetBids | AddBid | UpdateBid | DeleteBid | SetLoading;
export type BidState = {
  loading: boolean;
  bids: Array<Bid> | null;
};
