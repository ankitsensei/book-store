import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

import { configDotenv } from "dotenv";
configDotenv();

const app = express();
// Middleware for parsing request body
app.use(express.json());

const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.mongoDBURL;

console.log(process.env.PORT);

// Middleware for handling CORS policy
// Option 1. Allow all origins with default of cors(*)
app.use(cors());

// Option 2. Allow custom Origins
// app.use(
//   cors({
//     origin: `http://localhost:3000`,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   }),
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Hello from server");
});

app.use("/books", booksRoute);

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
