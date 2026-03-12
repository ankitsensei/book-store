import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { NavLink } from "react-router";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#F1F1F1] w-full h-screen flex">
      <Sidebar showType={showType} setShowType={setShowType} />
      <div className="w-full p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <NavLink to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </NavLink>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
