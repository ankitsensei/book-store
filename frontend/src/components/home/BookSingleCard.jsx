import React, { useState } from "react";
import { NavLink } from "react-router";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="m-4 w-72 h-96 relative rounded-2xl overflow-hidden hover:shadow-xl">
      {/* Book Image */}
      <img
        src={`data:image/jpeg;base64,${book.photo}`}
        alt="book"
        className="w-full h-full object-cover"
      />

      {/* Publish Year */}
      <h2 className="absolute top-2 right-2 px-3 py-1 bg-white rounded-lg text-sm font-semibold">
        {book.publishYear}
      </h2>

      {/* Info Section */}
      <div className="absolute bottom-0 w-full bg-zinc-100 bg-opacity-90 p-3 text-black rounded-b-2xl">
        <h2 className="text-lg font-semibold">{book.title}</h2>

        <div className="flex items-center gap-2 text-sm mt-1">
          <BiUserCircle className="text-xl" />
          <span>{book.author}</span>
        </div>

        {/* Icons */}
        <div className="flex justify-between items-center mt-3 px-2">
          <BiShow
            className="text-2xl text-blue-700 hover:text-black cursor-pointer"
            onClick={() => setShowModal(true)}
          />

          <NavLink to={`/books/details/${book._id}`}>
            <BsInfoCircle className="text-2xl text-green-700 hover:text-black" />
          </NavLink>

          <NavLink to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
          </NavLink>

          <NavLink to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
          </NavLink>
        </div>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
