import React from "react";
import MainBlog from "../components/MainBlog";
import UnreadBlogs from "../components/UnreadBlogs";
import BidLists from "../components/BidLists";

function Main() {
  return (
    <div className="mb-16">
      <div className="mb-5 mt-12 flex flex-wrap md:flex-no-wrap">
        <MainBlog />
        <UnreadBlogs />
      </div>
      <BidLists />
    </div>
  );
}

export default Main;
