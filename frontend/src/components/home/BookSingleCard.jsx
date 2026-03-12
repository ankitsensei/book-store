import React, { useState } from "react";
import { NavLink } from "react-router";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-2xl m-4 w-72 h-90 relative hover:shadow-xl bg-[url('https://images.pexels.com/photos/35758327/pexels-photo-35758327.jpeg')] bg-cover bg-center"
    >
      <div className="h-1/2">
        <h2 className="absolute top-1 right-1 px-4 py-1 bg-zinc-300 rounded-xl">
          {book.publishYear}
        </h2>
      </div>
      <div className="h-1/2 px-2 bg-linear-to-b from-transparent to-black rounded-2xl">
        <div className="flex justify-start items-center gap-x-2 text-zinc-300">
          {/* <PiBookOpenTextLight className="text-2xl" /> */}
          <h2 className="my-2 text-xl">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 text-white">
          <BiUserCircle className="text-2xl" />
          <h2 className="my-1 text-sm">{book.author}</h2>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
          <BiShow
            className="text-3xl text-blue-800 hover:text-black cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <NavLink to={`/books/details/${book._id}`}>
            <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
          </NavLink>
          <NavLink to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-green-800 hover:text-black" />
          </NavLink>
          <NavLink to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="text-2xl text-green-800 hover:text-black" />
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
