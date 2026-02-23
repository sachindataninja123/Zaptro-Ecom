import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";

const ProductCard = ({ product }) => {
  //   console.log(product);
  const navigate = useNavigate();

  const {addToCart} = useContext(cartContext);

  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      <img
        src={product.images[0]}
        alt=""
        className="bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1 className="font-semibold line-clamp-1 p-1">{product.title}</h1>
      <div className="flex justify-between items-center ">
        <p className="my-1 text-lg text-red-500 font-bold">
          $ {product.price}
        </p>
        <p className="text-green-600 px-0.5 flex items-center gap-1 rounded-md  ">
          {Number(product.rating).toFixed(1)} <FaStarHalfAlt />
        </p>
      </div>
      <button onClick={() =>  addToCart(product)} className="bg-red-500 px-3 py-1 text-lg rounded-md hover:rounded-full transition-all text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold mt-2">
        {" "}
        <IoCartOutline className="w-6 h-6" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
