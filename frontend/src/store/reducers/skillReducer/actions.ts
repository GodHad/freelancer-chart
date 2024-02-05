import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { GET_SKILLS, SkillState } from "./actionTypes";
import axios from "axios";

export const GetSkills =
  (): ThunkAction<void, SkillState, null, Action<string>> => (dispatch) => {
    const token = window.localStorage.getItem("jwtToken");
    axios
      .get("/skill/get_skills", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_SKILLS,
          payload: res.data?.skills.map((skill: any) => ({
            value: skill._id,
            label: skill.name,
          })),
        });
      });
  };
