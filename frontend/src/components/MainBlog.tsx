import { useSelector } from "react-redux";
import Skill from "./Skill";
import { RootState } from "../store";

function MainBlog() {
  const mainBlog = useSelector(
    (state: RootState) => state.blogReducer.mainBlog
  );
  return (
    <div className="mb-4 lg:mb-0 p-4 w-full md:w-2/4 relative block border-r-2">
      {mainBlog !== null ? (
        <>
          <div className="text-white text-lg hidden md:block mt-4">
            {mainBlog?.jobs_details.length && mainBlog?.jobs_details.map(job => job.name).map(jobName => (
                <Skill key={jobName} name={jobName} color="success" />
            ))}
          </div>
          <h1 className="text-white-100 text-4xl font-bold mt-2 mb-2 leading-tight break-words">
            {mainBlog?.title}
          </h1>
          <p className="text-white-100 mb-4 break-words">
            {mainBlog?.appended_descr}
          </p>
          <div className="text-black text-lg hidden md:block mt-4">
            <Skill name={"name"} color="info" />
            <Skill name={"country"} color="info" />
            <Skill name={"31 Jan, 2024"} color="info" />
          </div>
          <button className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
            Show sample bids for this post.
          </button>
        </>
      ) : (
        <h1 className="text-white-100 text-4xl font-bold mt-2 mb-2 leading-tight">
          There's no selected post.
        </h1>
      )}
    </div>
  );
}

export default MainBlog;
