import React from "react";

const Btn = ({ label, action }) => {
  return (
    <button
      className={`px-2 py-1 rounded-xl border
      ${action == "info" && "bg-blue-200 border-blue-600 text-blue-600"}
      ${action == "edit" && "bg-amber-200 border-amber-600 text-amber-600"}
      ${action == "delete" && "bg-red-200 border-red-600 text-red-600"} `}
    >
      {label}
    </button>
  );
};

export default Btn;
