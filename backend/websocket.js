import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8003 });

wss.on("connection", function connection(ws) {
  // Send a welcome message to the newly connected client
  ws.send("Welcome to the WebSocket server!");
  console.log("A client connected");
  // Handle messages from clients
  ws.on("message", (message) => {
    console.log("Received message:", message);
    // Handle the received message here
  });

  ws.on("close", () => {
    console.log("A client disconnected");
  });
});

export default wss;