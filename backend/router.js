import express from "express";
const router = express.Router();
import Task from "./models/Task.js";
import wss from "./websocket.js";
import WebSocket from "ws";

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
            client.send(JSON.stringify(task));
          }
        });
      })
      .catch(console.log);
    return res.json({ success: true });
  });
});

export default router;
