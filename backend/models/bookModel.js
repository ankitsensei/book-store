import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true, // Store base64 encoded data
    },
  },
  {
    timestamps: true,
  },
);

export const Book = mongoose.model("book", bookSchema);
