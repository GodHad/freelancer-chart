"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Task_1 = __importDefault(require("./models/Task"));
const websocket_1 = __importDefault(require("./websocket"));
const ws_1 = __importDefault(require("ws"));
router.get("/get_all_blogs", (req, res) => {
    Task_1.default.find({ view: false })
        .then((tasks) => res.status(200).json({ success: true, tasks }))
        .catch((error) => res.status(500).json({ success: false, error }));
});
router.post("/new-post-notification", (req, res) => {
    const postId = req.body.postData.id;
    Task_1.default.find({ "postData.id": postId }).then((tasks) => {
        if (tasks.length !== 0)
            return res.json({
                success: true,
                message: "This task is already existed.",
            });
        const newTask = new Task_1.default(req.body);
        newTask
            .save()
            .then((task) => {
            // console.log(wss.clients);
            websocket_1.default.clients.forEach((client) => {
                if (client.readyState === ws_1.default.OPEN) {
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
    Task_1.default.findById(_id).then((task) => {
        if (task === null)
            return res.status(400).json({ success: false, error: "Cannot find." });
        task.view = true;
        task
            .save()
            .then(() => res.status(200).json({ success: true }))
            .catch((error) => res.status(500).json({ success: false, error }));
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map