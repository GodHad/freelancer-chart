import React, { useEffect } from "react";
import UnreadBlog from "./UnreadBlog";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { ThunkDispatch } from "redux-thunk";
import { BlogActionTypes, BlogState } from "../store/reducers/blogsReducer/actionTypes";
import { GetBlogs } from "../store/reducers/blogsReducer/actions";

function UnreadBlogs() {
  const blogs = useSelector((state: RootState) => state.blogReducer.blogs);
  const blogDispatch = useDispatch<ThunkDispatch<BlogState, any, BlogActionTypes>>();
  useEffect(() => {
    blogDispatch(GetBlogs());
  }, []);
  return (
    <div className="w-full md:w-2/4 overflow-y-scroll h-screen overflow-x-hidden">
      {blogs.length === 0 ? (
        <h1 className="p-10 text-white-100 text-4xl font-bold mt-2 mb-2 leading-tight">
          There's no new post.
        </h1>
      ) : (
        <>
          {blogs.map((blog) => (
            <UnreadBlog key={blog._id} blog={blog} />
          ))}
        </>
      )}
    </div>
  );
}

export default UnreadBlogs;
