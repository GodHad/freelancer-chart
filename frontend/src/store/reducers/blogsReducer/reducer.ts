import {
  BlogActionTypes,
  CLICK_BLOG,
  SHOW_BLOG,
  ADD_BLOG,
  BlogState,
  GET_BLOGS,
  SET_LOADING,
} from "./actionTypes";

export const initialBlogState: BlogState = {
  blogs: [],
  mainBlog: null,
  loading: false
};

export const blogReducer = (
  state = initialBlogState,
  action: BlogActionTypes
) => {
    switch (action.type) {
        case GET_BLOGS: 
            return {
                ...state,
                blogs: action.payload.blogs,
                loading: false
            }
        case ADD_BLOG: 
            return {
                ...state,
                blogs: [action.payload.blog].concat(state.blogs),
                loading: false
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
        case SET_LOADING: 
            return {
                ...state,
                loading: action.payload.loading
            }
        default: 
            return state;
    }
};
