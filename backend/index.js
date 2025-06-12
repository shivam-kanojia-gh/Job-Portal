import express from "express";
import { connectDB } from "./lib/db.js";

import "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http://localhost:" + PORT);
});