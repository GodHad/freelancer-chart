import { Bid } from "./Bid";
import { BidActionTypes, GET_BIDS, SET_LOADING_IN_BID } from "./actionTypes";

export const initialBidState = {
  bids: null,
  loading: false
}

export const bidReducer = (state = initialBidState, action: BidActionTypes) => {
  switch (action.type) {
    case GET_BIDS:
      return action.payload;
    case SET_LOADING_IN_BID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
