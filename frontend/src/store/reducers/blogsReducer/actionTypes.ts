import { Blog } from "./Blog";

export const GET_BLOGS = "GET_BLOGS";
export const ADD_BLOG = "ADD_BLOG";
export const SHOW_BLOG = "SHOW_BLOG";
export const CLICK_BLOG = "CLICK_BLOG";

interface GetBlogs {
  type: typeof GET_BLOGS;
  payload: { blogs: Array<Blog> };
}

interface AddBlog {
  type: typeof ADD_BLOG;
  payload: { blog: Blog };
}

interface ShowBlog {
  type: typeof SHOW_BLOG;
  payload: { _id: String };
}

interface ClickBlog {
  type: typeof CLICK_BLOG;
  payload: { _id: String };
}

export type BlogActionTypes = GetBlogs | AddBlog | ShowBlog | ClickBlog;
export type BlogState = {
  mainBlog: Blog | null;
  blogs: Array<Blog>;
};
