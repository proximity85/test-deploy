import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.json("Hello From API");
});

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
