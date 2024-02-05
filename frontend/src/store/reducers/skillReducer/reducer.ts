import { GET_SKILLS, SkillActionTypes } from "./actionTypes";

export const initialSkillState = [];

export const skillReducer = (
  state = initialSkillState,
  action: SkillActionTypes
) => {
  switch (action.type) {
    case GET_SKILLS:
      return action.payload;
    default:
      return state;
  }
};
