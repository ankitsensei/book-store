import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { NavLink } from "react-router";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import Sidebar from "../components/Sidebar";

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://book-store-z4pq.onrender.com/books")
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
    <div className="bg-[#F1F1F1] w-full h-full flex">
      <Sidebar showType={showType} setShowType={setShowType} />

      <div className="w-full h-full p-4">
        <div className="w-full h-20 border-b border-zinc-300"></div>
        <div className="bg-white flex flex-col gap-10 mt-4 p-5 rounded-3xl">
          <div className="flex justify-between item s-center">
            <div className="flex bg-[#F1F1F1] px-1 py-1 rounded-xl">
              <button
                className={`flex items-center rounded-lg px-2 py-1 ${showType == "table" && "bg-white"}`}
                onClick={() => setShowType("table")}
              >
                <CiViewTable className="text-3xl" /> List
              </button>
              <button
                className={`flex items-center rounded-lg px-2 py-1 ${showType == "card" && "bg-white"}`}
                onClick={() => setShowType("card")}
              >
                <CiCreditCard1 className="text-3xl" />
                Card
              </button>
            </div>
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
    </div>
  );
};

export default Home;
