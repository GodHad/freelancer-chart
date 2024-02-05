import http from "http";
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routers/authRouter";
import blogRouter from "./routers/blogRouter";
import bidRouter from "./routers/bidRouter";
import skillRouter from "./routers/skillRouter";
import passport from 'passport'
import passportConfig from "./config/passport-config";

const app = express();
const server = http.createServer(app);

mongoose
  .connect("mongodb://127.0.0.1:27017/freelancer-chart")
  .then(() => {
    console.log("MongoDB connected.");

    passportConfig(passport);
    app.use(passport.initialize());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({}));

    app.use(cors());
    app.use(morgan("dev"));
    app.use("/auth", authRouter);
    app.use("/bid", bidRouter);
    app.use("/blog", blogRouter);
    app.use("/skill", skillRouter)

    const PORT = 8081;

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connect error.", err);
    process.exit(1);
  });
