"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const wss = new ws_1.default.Server({ port: 8003 });
wss.on("connection", function connection(ws) {
    // Send a welcome message to the newly connected client
    ws.send(JSON.stringify({
        success: true,
        message: "Welcome to the WebSocket server!",
    }));
    // Handle messages from clients
    ws.on("message", (message) => {
        console.log("Received message:", message);
        // Handle the received message here
    });
    ws.on("close", () => {
        console.log("A client disconnected.");
    });
});
exports.default = wss;
//# sourceMappingURL=websocket.js.map