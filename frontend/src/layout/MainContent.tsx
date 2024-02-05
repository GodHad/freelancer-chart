import React, { useEffect } from "react";
import MainBlog from "../components/blogs/MainBlog";
import UnreadBlogs from "../components/blogs/UnreadBlogs";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { SkillActionTypes, SkillState } from "../store/reducers/skillReducer/actionTypes";
import { GetSkills } from "../store/reducers/skillReducer/actions";

function MainContent() {
  const dispatch = useDispatch<ThunkDispatch<SkillState, any, SkillActionTypes>>()
  useEffect(() => {
    dispatch(GetSkills());
  }, [])
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
