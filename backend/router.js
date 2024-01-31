import express from "express";
const router = express.Router();
import Task from "./models/Task.js";
import wss from './websocket.js';
import WebSocket from "ws";

router.post("/new-post-notification", (req, res) => {
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

export default router;
