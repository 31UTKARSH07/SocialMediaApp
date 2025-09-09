import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signUp = async (req, res) => {
  const { name, email, password, username } = req.body;
  if (!name || !email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUserEmail = await User.findOne({ email });
  if (existingUserEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }
  if(password.length < 6){
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }
  const salt = await bcrypt.genSalt(10); // 10 represtents the number of rounds it takes to generate the salt
  const hashpassword = await bcrypt.hash(password,salt)
  console.log(salt);
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const newUser = await User.create({ name, email, password:hashpassword, username });
  return res.status(201).json({newUser});
};

export const signIn = async (req, res) => {
  const {password, username } = req.body;
  if (! password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    return res.status(400).json({ message: "Invalid username" });
  }
  const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
  if(!isPasswordCorrect){
    return res.status(400).json({ message: "Invalid password" });
  }
  return res.status(200).json({message: "Login successful",user:existingUser});
};
