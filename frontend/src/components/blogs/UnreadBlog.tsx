import Tag from "../common/Tag";
import { Blog } from "../../store/reducers/blogsReducer/Blog";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {
  BlogState,
  BlogActionTypes,
} from "../../store/reducers/blogsReducer/actionTypes";
import { ClickBlog, ShowBlog } from "../../store/reducers/blogsReducer/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  blog: Blog;
}

function UnreadBlog({ blog }: Props) {
  const blogDispatch =
    useDispatch<ThunkDispatch<BlogState, any, BlogActionTypes>>();
  return (
    <div className="rounded w-[98%] flex flex-col md:flex-row shadow-sm shadow-blue-400 relative px-2 py-3">
      <div className="bg-gray-800 rounded">
        <div className="text-white text-lg md:block mt-4">
          <Tag
            name={`${blog.minbudget}-${
              blog.maxbudget + " " + blog.currency_details.code
            }`}
            color="danger"
          />
        </div>
        <div
          className="md:mt-0 text-white-800 font-semibold text-xl mb-2 hover:underline break-all"
          onClick={() => blogDispatch(ClickBlog(blog._id))}>
          {blog.title}
        </div>
        <div className="text-white text-lg md:block mt-4">
          <Tag
            name={blog.username + " \n" + blog.location.country}
            color="info"
            flagUrl={blog.location.flag_url}
          />
          <Tag
            name={`${new Date(blog.time_submitted * 1000).toLocaleString(
              "en-us",
              { timeZone: "Europe/Paris" }
            )}`}
            color="info"
          />
        </div>
      </div>
      <button
        type="button"
        className="cursor-pointer opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        onClick={() => blogDispatch(ShowBlog(blog._id))}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default UnreadBlog;
