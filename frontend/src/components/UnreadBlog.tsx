import React from "react";
import Skill from "./Skill";

function UnreadBlog() {
  return (
    <div className="rounded w-[98%] flex flex-col md:flex-row mb-10 border ml-2 mr-2">
      <div className="bg-gray-800 rounded px-4">
        <div className="text-white text-lg md:block mt-4">
          <Skill name={"Javascript"} color="success" />
          <Skill name={"PHP"} color="success" />
        </div>
        <div className="md:mt-0 text-white-800 font-semibold text-xl mb-2">
          At every tiled on ye defer do. No attention suspected oh difficult.
        </div>
        <div className="text-white text-lg md:block mt-4">
          <Skill name={"name"} color="info" />
          <Skill name={"country"} color="info" />
          <Skill name={"31 Jan, 2024"} color="info" />
        </div>
      </div>
    </div>
  );
}

export default UnreadBlog;
