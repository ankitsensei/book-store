import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-150 max-w-full h-100 bg-white rounded-xl p-4 flex flex-col relative"
      >
        <div className="flex justify-between w-full">
          <h2 className=" top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {book.publishYear}
          </h2>
          <AiOutlineClose
            className=" right-6 top-6 text-3xl text-red-600 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut rerum
          ullam sapiente nulla quae provident, aperiam dolor iusto quod,
          incidunt omnis, totam minima esse! Amet, obcaecati at porro dolores
          sapiente vero deserunt dolorem! Esse explicabo quis iste est commodi
          porro.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
