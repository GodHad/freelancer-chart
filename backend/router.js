import express from "express";
const router = express.Router();
import Task from "./models/Task.js";
import wss from "./websocket.js";
import WebSocket from "ws";

router.get("/get_all_blogs", (req, res) => {
  Task.find({ view: false })
    .then((tasks) => res.status(200).json({ success: true, tasks }))
    .catch((error) => res.status(500).json({ success: false, error }));
});

router.post("/new-post-notification", (req, res) => {
  const postId = req.body.postData.id;

  Task.find({ "postData.id": postId }).then((tasks) => {
    if (tasks.length !== 0)
      return res.json({
        success: true,
        message: "This task is already existed.",
      });

    const newTask = new Task(req.body);
    newTask
      .save()
      .then((task) => {
        // console.log(wss.clients);
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ success: true, newTask: true, task }));
          }
        });
      })
      .catch(console.log);
    return res.json({ success: true });
  });
});

router.post("/show_blog", (req, res) => {
  const { _id } = req.body;
  Task.findById(_id).then((task) => {
    task.view = true;
    task
      .save()
      .then(() => res.status(200).json({ success: true }))
      .catch((error) => res.status(500).json({ success: false, error }));
  });
});

export default router;
