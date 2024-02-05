import { Skill } from "../bidsReducer/Bid";

export const GET_SKILLS = "GET_SKILLS";

interface GetSkills {
    type: typeof GET_SKILLS,
    payload: Array<Skill>
}

export type SkillActionTypes = GetSkills;

export type SkillState = Array<Skill> | null;