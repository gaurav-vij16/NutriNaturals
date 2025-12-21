import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminroutes from "./Route/AdminRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL as string;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: Error) => {
    console.error("Could not connect to MongoDB", err);
  });

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to NutriNaturals Backend!");
});

app.use("/api/admin", adminroutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
