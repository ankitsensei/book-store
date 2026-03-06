import express from "express";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
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

app.post("/books", async (req, res) => {
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
    const books = await Book.create(newBook);
    return res.status(201).send(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all books from db
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// Get one book from db via id
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
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
