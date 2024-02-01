import http from "http";
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";

const app = express();
const server = http.createServer(app);

mongoose
  .connect("mongodb://127.0.0.1:27017/freelancer-chart")
  .then(() => {
    console.log("MongoDB connected.");

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({}));

    app.use(cors());
    app.use(morgan("dev"));
    app.use("/", router);

    const PORT = 8081;

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connect error.", err);
    process.exit(1);
  });