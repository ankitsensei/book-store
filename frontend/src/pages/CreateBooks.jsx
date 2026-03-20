import React, { useState } from "react";
import BackBtn from "../components/BackBtn";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const imagePreview = image ? URL.createObjectURL(image) : null;

  const handleSaveBook = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishYear", publishYear);
    formData.append("photo", image);
    setLoading(true);
    axios
      .post("http://localhost:5555/books", formData)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        navigate("/");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4 bg-[#F1F1F1] w-full h-screen">
      <BackBtn />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 rounded-xl w-100 p-4 mx-auto bg-white">
        <div className="flex flex-col">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mr-4 text-gray-500">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border-2 border-gray-500 p-2 rounded-lg"
          />
        </div>
        <div className="mt-4">
          {imagePreview ? (
            <img src={imagePreview} alt="img" className="w-40 h-54" />
          ) : (
            <img
              src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
              className="w-40 h-54"
            />
          )}
        </div>
        <button
          className="p-2 bg-sky-300 m-8 rounded-full"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
