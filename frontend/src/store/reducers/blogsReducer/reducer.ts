import {
  BlogActionTypes,
  CLICK_BLOG,
  SHOW_BLOG,
  ADD_BLOG,
  BlogState,
  GET_BLOGS,
} from "./actionTypes";
import { GetBlogs } from "./actions";

export const initialBlogState: BlogState = {
  blogs: [],
  mainBlog: null,
};

export const blogReducer = (
  state = initialBlogState,
  action: BlogActionTypes
) => {
    switch (action.type) {
        case GET_BLOGS: 
            return {
                ...state,
                blogs: action.payload.blogs
            }
        case ADD_BLOG: 
            return {
                ...state,
                blogs: [action.payload.blog].concat(state.blogs)
            }
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
