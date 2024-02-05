import express from "express";
import Skill from "../models/Skill";
const router = express.Router();
import passport from 'passport';

router.get(
  "/get_skills",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const skills = await Skill.find();
    return res.status(200).json({success: true, skills})
  }
);

export default router;
