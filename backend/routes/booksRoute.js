import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Post a book in db
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
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
router.get("/details/:id", async (req, res) => {
  try { 
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// Route for update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book updated successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// Route for delete a hook
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
});

// module.exports = router;
export default router;
