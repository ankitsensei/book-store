import React from "react";
import { CiViewTable } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="bg-[#F1F1F1] border-r border-zinc-300 w-110 p-4">
      <p className="text-xl font-semibold mb-20">Book List</p>
      <div className="flex flex-col gap-3">
        <p className="font-semibold mx-3">Menu</p>
        <ul className="flex flex-col">
          <li className="sidebarItems bg-white">
            <CiViewTable className="sidebarIcons" />
            Table
          </li>
          <li className="sidebarItems">
            <CiCreditCard1 className="sidebarIcons" />
            Card
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
