import Skill from "./Skill";
import { Blog } from "../store/reducers/blogsReducer/Blog";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {
  BlogState,
  BlogActionTypes,
} from "../store/reducers/blogsReducer/actionTypes";
import { ClickBlog, ShowBlog } from "../store/reducers/blogsReducer/actions";

interface Props {
  blog: Blog;
}

function UnreadBlog({ blog }: Props) {
  const blogDispatch =
    useDispatch<ThunkDispatch<BlogState, any, BlogActionTypes>>();
  return (
    <div
      className="rounded w-[98%] flex flex-col md:flex-row mb-10 border ml-2 mr-2 relative">
      <div className="bg-gray-800 rounded px-4">
        <div className="text-white text-lg md:block mt-4">
          {blog.jobs_details
            .map((job) => job.name)
            .map((jobName) => (
              <Skill key={jobName} name={jobName} color="success" />
            ))}
        </div>
        <div className="md:mt-0 text-white-800 font-semibold text-xl mb-2 hover:underline" onClick={() => blogDispatch(ClickBlog(blog._id))}>
          {blog.title}
        </div>
        <div className="text-white text-lg md:block mt-4">
          <Skill name={"name"} color="info" />
          <Skill name={"country"} color="info" />
          <Skill name={"31 Jan, 2024"} color="info" />
        </div>
      </div>
      <span
        className="absolute right-2 top-[40%]"
        style={{
          fontSize: "22px",
          color: "#3e3947",
          background: "#fff",
          opacity: 0.8,
          height: "30px",
          paddingLeft: "10px",
          width: "30px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 9999999999,
          fontWeight: 200,
        }}
        onClick={() => blogDispatch(ShowBlog(blog._id))}
        >
        x
      </span>
    </div>
  );
}

export default UnreadBlog;
