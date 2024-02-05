import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  GET_BLOGS,
  ADD_BLOG,
  SHOW_BLOG,
  CLICK_BLOG,
  BlogState,
  SET_LOADING,
} from "./actionTypes";
import { Blog } from "./Blog";
import Axios from "axios";

const token = window.localStorage.getItem("jwtToken");

export const GetBlogs =
  (): ThunkAction<void, BlogState, null, Action<string>> => (dispatch) => {
    dispatch({ type: SET_LOADING, payload: { loading: true } });
    Axios.get("/blog/get_all_blogs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const tasks = res.data.tasks.reverse();
        const blogs = tasks.map((task: any) => {
          const blog = new Blog(task);
          return blog;
        });
        dispatch({ type: GET_BLOGS, payload: { blogs } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const AddBlog =
  (blog: Blog): ThunkAction<void, BlogState, null, Action<string>> =>
  (dispatch) => {
    dispatch({ type: SET_LOADING, payload: { loading: true } });
    dispatch({ type: ADD_BLOG, payload: { blog } });
  };

export const ShowBlog =
  (_id: string): ThunkAction<void, BlogState, null, Action<string>> =>
  (dispatch) => {
    Axios.post(
      "/blog/show_blog",
      { _id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Optional: Specify the content type if needed
        },
      }
    )
      .then(() => {
        dispatch({ type: SHOW_BLOG, payload: { _id } });
      })
      .catch((err) => console.log("Error is occurred:", err.error));
  };

export const ClickBlog =
  (_id: string): ThunkAction<void, BlogState, null, Action<string>> =>
  (dispatch) => {
    dispatch({ type: CLICK_BLOG, payload: { _id } });
  };
