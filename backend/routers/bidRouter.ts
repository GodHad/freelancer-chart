import express, { RequestParamHandler } from "express";
import Bid from "../models/BidTemp";
import Skill from "../models/Skill";
const router = express.Router();
import passport from "passport";
import { Request } from "express";

interface CustomRequest extends Request {
  user?: { username: string; email: string; _id: string };
}

router.post(
  "/get_bids",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const skillSets = req.body.skillSets;
    const skillNames = skillSets.map((skill) => skill.name);
    const skills = await Skill.find({ name: { $in: skillNames } });
    const bids = await Bid.find({
      skillSets: { $in: skills.map((skill) => skill._id) },
    }).populate("skillSets");
    return res.status(200).json({ success: true, bids });
  }
);

router.post(
  "/add_bid",
  passport.authenticate("jwt", { session: false }),
  (req: CustomRequest, res) => {
    const newBid = new Bid({
      content: req.body.bid.content,
      skillSets: req.body.bid.skillSets.map((skill) => skill._id),
      userId: req.user?._id,
    });

    newBid
      .save()
      .then((bid) => res.status(200).json({ success: true, bid }))
      .catch((error) => res.status(400).json({ success: false, error }));
  }
);

export default router;
