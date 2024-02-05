import express from "express";
import User from "../models/User";
import createSecretToken from "../utils/SecretToken";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const users = await User.findOne({ email });
  if (!users) {
    const newUser = new User({username, email, password});
    const user = await newUser.save();
    return res.status(200).json({
      success: true,
      user,
      jwtToken: createSecretToken(user._id, user.email, user.username),
    });
  } else {
    return res
      .status(200)
      .json({ success: false, error: { email: "Email is already exist." } });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res
      .status(200)
      .json({ success: false, error: { email: "Not found" } });

  const auth = await bcrypt.compare(password, user.password);

  if (!auth)
    return res
      .status(200)
      .json({
        success: false,
        errors: { email: "Incorrect email", password: "Incorrent password" },
      });

  return res
    .status(200)
    .json({ success: true, user, jwtToken: createSecretToken(user._id, user.email, user.username) });
});

export default router;
