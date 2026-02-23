import React from "react";
import { useNavigate } from "react-router-dom";

const BreadCrums = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-xl text-gray-600 font-semibold">
        <span className="cursor-pointer hover:text-blue-600 hover:underline transition-all"  onClick={() => navigate("/")}>
          Home
        </span>
        /
        <span className="cursor-pointer  hover:text-blue-600 hover:underline transition-all" onClick={() => navigate("/products")}>
          Products
        </span>{" "}
        / <span className="font-bold text-2xl">{title}</span>
      </h1>
    </div>
  );
};

export default BreadCrums;
