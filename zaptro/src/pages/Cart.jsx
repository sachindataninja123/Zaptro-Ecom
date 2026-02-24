import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import emptyCart from "../assets/empty-cart.png";

const Cart = () => {
  const { cartItem, updateQuantity, deleteItem } = useContext(cartContext);
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);
  const totalPriceWithCeil = Math.ceil(totalPrice);

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-5 md:px-0">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="text-2xl font-bold">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10">
              {cartItem.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-20 h-20 rounded-md"
                      />
                      <div>
                        <h1 className="md:w-75 line-clamp-2"> {item.title}</h1>
                        <p className="text-red-500 font-bold text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white text-xl flex gap-4 p-2 rounded-md font-bold  ">
                      <button
                        onClick={() =>
                          updateQuantity(cartItem, item.id, "decrease")
                        }
                        className="cursor-pointer"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(cartItem, item.id, "increase")
                        }
                        className="cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <span
                      onClick={() => deleteItem(item.id)}
                      className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl"
                    >
                      <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="p-2 rounded-md bg-white"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    className="p-2 rounded-md bg-white"
                  />
                </div>
                <div className="flex flex-col md:flex-row w-full gap-5">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      placeholder="Enter your State"
                      className="p-2 rounded-md bg-white"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">PinCode</label>
                    <input
                      type="text"
                      placeholder="Enter your Pincode"
                      className="p-2 rounded-md bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-5">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      placeholder="Enter your Country"
                      className="p-2 rounded-md bg-white"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">Phone No</label>
                    <input
                      type="number"
                      placeholder="Enter your phone no"
                      className="p-2 rounded-md bg-white"
                    />
                  </div>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-3 cursor-pointer">
                  Submit
                </button>
                <div className="flex items-center justify-center w-full text-gray-700">
                  -------OR-------
                </div>
                <div className="flex justify-center">
                  <button className="bg-red-500 text-white px-3 py-2 rounded-md">
                    Detect Location
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="font-bold text-gray-800 text-xl">
                  Bill details
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className=" flex items-center justify-center gap-1 ">
                    <span>
                      <LuNotebookText />
                    </span>
                    Items total
                  </h1>
                  <p>${totalPriceWithCeil}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <MdDeliveryDining />
                    </span>{" "}
                    Delivery Charge
                  </h1>
                  <p className="text-red-500 font-semibold">
                    {" "}
                    <span className="text-gray-700 line-through">$25</span>FREE
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <GiShoppingBag />
                    </span>{" "}
                    Handling Charge
                  </h1>
                  <p className="text-red-500 font-semibold">$5</p>
                </div>
                <hr className="text-gray-200 mt-2" />
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg">Grand Total</h1>
                  <p className="font-semibold text-lg">
                    ${totalPriceWithCeil + 5}
                  </p>
                </div>
                <h1 className="font-semibold text-gray-700 mt-7 mb-3">
                  Apply Promo Code
                </h1>
                <div className="flex gap-3">
                  <input
                    type="text "
                    placeholder="Enter Code..."
                    className="p-2 rounded-md w-full"
                  />
                  <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md">
                    Apply
                  </button>
                </div>
                <button className="bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  gap-3 justify-center items-center h-150">
          <h1 className="text-red-500/80 font-bold text-4xl text-muted">
            Oh no! Your Cart is empty
          </h1>
          <img src={emptyCart} alt="" />
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 px-5 py-2 rounded-md text-white cursor-pointer mb-3"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
