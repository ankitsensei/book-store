import React from "react";

import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="flex flex-wrap">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
