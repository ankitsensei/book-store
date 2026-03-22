import React, { useState, useEffect } from "react";
import BackBtn from "../components/BackBtn";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(""); // old image
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const imagePreview = image ? URL.createObjectURL(image) : null;

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`https://book-store-z4pq.onrender.com/books/details/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setExistingImage(response.data.photo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happend. Please check console.");
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishYear", publishYear);
    if (image) {
      formData.append("photo", image);
    } else {
      formData.append("photo", existingImage);
    }
    setLoading(true);
    axios
      .put(`https://book-store-z4pq.onrender.com/books/edit/${id}`, formData)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book edited successfully", { variant: "success" });
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
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col gap-2 rounded-xl w-110 p-6 mx-auto bg-white">
        <div className="flex flex-col">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <div className="mt-2 bg-zinc-100 p-5 rounded-xl">
          <div className="flex flex-col">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border border-gray-400 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="img"
                className="w-auto h-74 rounded-xl object-cover"
              />
            )}
            {existingImage && !image && (
              <img
                src={`data:image/jpeg;base64,${existingImage}`}
                alt="book"
                className="w-auto h-74 rounded-xl object-cover"
              />
            )}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="px-4 py-2 bg-yellow-500 text-white mt-4 rounded-lg"
            onClick={handleEditBook}
          >
            Save Edits
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
