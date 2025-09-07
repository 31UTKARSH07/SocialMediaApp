import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {
  const { name, email, password, username } = req.body;
  if (!name || !email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUserEmail = await User.findOne({ email });
  if (existingUserEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    return res.status(400).json({ message: "Username already exists" });
  }
  await User.create({ name, email, password, username });
  return res.status(201).json({ message: "User created successfully" });
};
