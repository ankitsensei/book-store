import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"

import { configDotenv } from "dotenv";
configDotenv();

const app = express();
// Middleware for parsing request body
app.use(express.json());

const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.mongoDBURL;

console.log(process.env.PORT);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Hello from server");
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
