import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackBtn from "../components/BackBtn";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    if (!id) return;
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/delete/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("An error happened. Please check console");
      });
  };
  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Delete Book</h1>

      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-150 p-4 mx-auto">
        <p>Are you sure you want to delete this book?</p>
        <button
          className="bg-red-500 text-white p-2 my-4"
          onClick={() => handleDeleteBook()}
        >
          Yes, delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
