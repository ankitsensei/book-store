import React from "react";
import { NavLink } from "react-router";
import Btn from "../Btn";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-collapse border-spacing-2">
      <thead>
        <tr className="">
          <th className="text-start border-b border-zinc-300 py-4">No</th>
          <th className="text-start border-b border-zinc-300 py-4">Title</th>
          <th className="text-start border-b border-zinc-300 py-4">Author</th>
          <th className="text-start border-b border-zinc-300 py-4">
            Publish Year
          </th>
          <th className="text-start border-b border-zinc-300 py-4">
            Operations
          </th>
        </tr>
      </thead>
      <tbody className="">
        {books.map((book, index) => (
          <tr key={book._id} className="h-8 w-full">
            <td className="border-b border-zinc-300 py-4">{index + 1}</td>
            <td className="border-b border-zinc-300 py-4">{book.title}</td>
            <td className="border-b border-zinc-300 py-4">{book.author}</td>
            <td className="border-b border-zinc-300 py-4">
              {book.publishYear}
            </td>
            <td className="border-b border-zinc-300 py-4">
              <div className="flex justify-start gap-x-2">
                <NavLink to={`/books/details/${book._id}`}>
                  <Btn label="More Info" action="info" />
                </NavLink>
                <NavLink to={`/books/edit/${book._id}`}>
                  <Btn label="Edit" action="edit" />
                </NavLink>
                <NavLink to={`/books/delete/${book._id}`}>
                  <Btn label="Delete" action="delete" />
                </NavLink>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
