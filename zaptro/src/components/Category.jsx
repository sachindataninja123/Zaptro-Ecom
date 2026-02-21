import React, { useEffect } from "react";
import { getData } from "../context/DataContext";

const Category = () => {
  const { categoryOnlyData } = getData();

  return (
    <div className="bg-[#101829]">
      <div className="mx-auto flex gap-4 items-center flex-wrap justify-center py-7 px-4">
        {categoryOnlyData?.map((item, idx) => {
          return (
            <div className="flex items-centerjustify-center" key={idx}>
              <button className="uppercase bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer active:scale-95 hover:bg-red-600 transition-all">{item}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
