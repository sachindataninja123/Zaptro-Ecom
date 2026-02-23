import React, { useContext } from "react";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { cartContext } from "../context/cartContext";

const Navbar = () => {
  const { cartItem } = useContext(cartContext);

  return (
    <div className="bg-white py-3 shadow-xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className=" flex gap-7 items-center justify-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">Z</span>aptro
            </h1>
          </Link>
          <div className="flex items-center cursor-pointer text-gray-700 gap-1">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>

        <nav className="flex items-center justify-center gap-7">
          <ul className="flex items-center justify-center gap-7 text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500 transition-all" : "text-black"} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-8 w-8" />
            <h1 className="absolute -top-2.5 -right-2 flex items-center justify-center bg-red-500 h-6 w-6 text-white  rounded-full">
              {cartItem.length}
            </h1>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-red-600 transition-all" />
            </SignedOut>
            {/* Show the user button when the user is signed in */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
