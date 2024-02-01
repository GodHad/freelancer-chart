import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  GET_BLOGS,
  ADD_BLOG,
  SHOW_BLOG,
  CLICK_BLOG,
  BlogState,
} from "./actionTypes";
import { Blog } from "./Blog";
import Axios from "axios";

export const GetBlogs =
  (): ThunkAction<void, BlogState, null, Action<string>> => (dispatch) => {
    Axios.get("/get_all_blogs").then((res) => {
      const tasks = res.data.tasks;
      const blogs = tasks.map((task: any) => {
        const blog = new Blog(task);
        return blog;
      });
      dispatch({ type: GET_BLOGS, payload: { blogs } });
    });
  };

export const AddBlog =
  (blog: Blog): ThunkAction<void, BlogState, null, Action<string>> =>
  (dispatch) => {
    dispatch({ type: ADD_BLOG, payload: { blog } });
  };

export const ShowBlog =
  (_id: string): ThunkAction<void, BlogState, null, Action<string>> =>
  (dispatch) => {
    Axios.post("http://localhost:8081/show_blog", { _id })
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
