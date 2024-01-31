import {
  BlogActionTypes,
  CLICK_BLOG,
  SHOW_BLOG,
  BlogState,
} from "./actionTypes";

import { Blog } from "./Blog";

export const initialBlogState: BlogState = {
  blogs: [],
  mainBlog: null,
};

export const blogReducer = (
  state = initialBlogState,
  action: BlogActionTypes
) => {
    switch (action.type) {
        case CLICK_BLOG:
            return {
                ...state,
                mainBlog: state.blogs.find(blog => blog._id == action.payload._id)
            }
        case SHOW_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload._id)
            }

        default: 
            return state;
    }
};
