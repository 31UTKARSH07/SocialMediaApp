import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Router from "./routers/authRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/auth", Router);
connectDB();

app.get("/", (req, res) => {
  res.send("Hello from the social server!");
});

app.listen(PORT, () => {
  console.log(`Social server is running on http://localhost:8000`);
});
