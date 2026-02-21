import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  category,
  setCategory,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2"
      />
      {/* category only data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3 ">
        {categoryOnlyData?.map((item, idx) => {
          return (
            <div key={idx} className="flex gap-2">
              <input type="checkbox" name={item} checked={checked === item} value={item}/>
              <button className="cursor-pointer uppercase">{item}</button>
            </div>
          );
        })}
      </div>

      {/* brand only data */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
      <select
        name=""
        id=""
        className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
      >
        {brandOnlyData?.map((item, idx) => {
          return (
            <option className="uppercase" key={idx} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      {/* price range */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Price Range : $0 - $5000</label>
        <input type="range" />
      </div>
      <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer mt-4">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
