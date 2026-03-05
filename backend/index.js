import express from "express";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;

console.log(process.env.PORT)

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Hello from server");
});

app.get("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

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
