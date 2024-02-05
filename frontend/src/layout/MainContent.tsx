import React from "react";
import MainBlog from "../components/blogs/MainBlog";
import UnreadBlogs from "../components/blogs/UnreadBlogs";

function MainContent() {
  return (
    <>
      <UnreadBlogs />
      <div className="relative md:ml-64 bg-gray-800 text-white">
        <MainBlog />
      </div>
    </>
  );
}

export default MainContent;
