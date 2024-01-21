const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("A new client connected");

  // Handle messages from clients
  ws.on("message", (message) => {
    console.log("Received message:", message);
    // Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle client disconnection
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
