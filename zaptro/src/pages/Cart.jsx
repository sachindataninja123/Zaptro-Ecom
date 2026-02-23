import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cartItem } = useContext(cartContext);

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
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
                        <h1 className="w-75 line-clamp-2"> {item.title}</h1>
                        <p className="text-red-500 font-bold text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white text-xl flex gap-4 p-2 rounded-md font-bold  ">
                      <button className="cursor-pointer">-</button>
                      <span>1</span>
                      <button className="cursor-pointer">+</button>
                    </div>
                    <span className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl">
                      <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-20">
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
                <div className="flex w-full gap-5">
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

                 <div className="flex w-full gap-5">
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
                <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-3 cursor-pointer">Submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Cart Is Empty</div>
      )}
    </div>
  );
};

export default Cart;
