import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackBtn from "../components/BackBtn";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    if (!id) return;
    setLoading(true);
    axios
      .delete(`https://book-store-z4pq.onrender.com/books/delete/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="p-4 w-full h-screen bg-[#F1F1F1]">
      <BackBtn />
      <h1 className="text-3xl my-4">Delete Book</h1>

      {loading ? <Spinner /> : ""}
      <div className="flex flex-col justify-center items-center bg-white rounded-xl w-150 p-4 mx-auto">
        <p>Are you sure you want to delete this book?</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => handleDeleteBook()}
        >
          Yes, delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
