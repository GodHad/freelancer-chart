import express from "express";
const router = express.Router();
import Task from "../models/Task";
import wss from "../websocket";
import WebSocket from "ws";
import passport from "passport";
import { Request } from "express";

interface CustomRequest extends Request {
  user?: { username: string; email: string; _id: string };
}

router.get(
  "/get_all_blogs",
  passport.authenticate("jwt", { session: false }),
  async (req: CustomRequest, res) => {
    try {
      const tasks = await Task.find({ viewUsers: { $nin: req.user._id } });
      res.status(200).json({ success: true, tasks });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  }
);

router.post("/new-post-notification", async (req, res) => {
  const postId = req.body.postData.id;
  if (req.body.postData.isTest)
    return res.status(200).json({ success: true, message: "This is test." });
  const tasks = await Task.find({ "postData.id": postId });
  if (tasks.length !== 0) {
    console.log("This task is already existed.")
    return res.json({
      success: true,
      message: "This task is already existed.",
    });

  }

  try {
    const newTask = new Task(req.body);
    newTask.viewUsers = [];
    const task = await newTask.save();
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ success: true, newTask: true, task }));
      }
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.post(
  "/show_blog",
  passport.authenticate("jwt", { session: false }),
  async (req: CustomRequest, res) => {
    try {
      const { _id: userId } = req?.user;
      const { _id } = req.body;
      await Task.findByIdAndUpdate(
        _id,
        { $push: { viewUsers: userId } },
        { new: true }
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
);

export default router;
