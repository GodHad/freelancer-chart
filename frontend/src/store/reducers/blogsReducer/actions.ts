import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SHOW_BLOG, CLICK_BLOG, BlogState } from "./actionTypes";

export const ShowBlog =
  (_id: string): ThunkAction<void, BlogState, null, Action<string>> =>
  (dispatch) => {
    dispatch({ type: SHOW_BLOG, payload: { _id } });
  };

export const ClickBlog =
  (_id: string): ThunkAction<void, BlogState, null, Action<string>> =>
  (dispatch) => {
    dispatch({ type: CLICK_BLOG, payload: { _id } });
  };
