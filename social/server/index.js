import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routers/authRoute.js";
import userRouter from "./routers/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//MIDDLEWARES
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from the social server!");
});

app.listen(PORT, () => {
  console.log(`Social server is running on http://localhost:8000`);
});
