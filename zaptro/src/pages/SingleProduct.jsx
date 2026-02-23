import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import BreadCrums from "../components/BreadCrums";
import { IoCartOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");

  console.log(singleProduct);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`,
      );

      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const originalPrice = Math.round(
    singleProduct.price / (1 - singleProduct.discountPercentage / 100),
  );

  return (
    <div>
      {SingleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <BreadCrums title={singleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
            {/* product image */}
            <div className="w-full">
              <img
                src={singleProduct.thumbnail}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            {/* product details */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>
              <div className="text-gray-700">
                {singleProduct.brand?.toUpperCase()} /{" "}
                {singleProduct.category?.toUpperCase()}{" "}
              </div>
              <h1 className="text-red-500 font-bold text-xl">
                ${singleProduct.price}
                <span className="line-through text-gray-700 ml-2">
                  {originalPrice}
                </span>
                <span className="bg-red-500 text-white px-4 py-2 rounded-full ml-3">
                  {singleProduct.discountPercentage} % discount
                </span>
              </h1>
              <div>
                <p>Ratings & Reviews</p>
                <p className="text-green-600 px-0.5 flex items-center gap-1 rounded-md  ">
                  {Number(singleProduct.rating).toFixed(1)} <FaStarHalfAlt />
                </p>
              </div>
              <p className="text-gray-600">{singleProduct.description}</p>

              {/* quantity selector */}

              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border border-gray-500 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex mt-4">
                <button className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md cursor-pointer ">
                  <IoCartOutline className="w-6 h-6" />
                  Add to Cart
                </button>
              </div>
              <p className="-mt-4">{singleProduct.returnPolicy}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
