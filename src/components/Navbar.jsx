// 

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = ({ cartItem }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-[65px] flex items-center shadow-md">
      <div className="w-full flex justify-between items-center px-6 md:px-16">
        {/* Logo */}
        <h3 className="font-bold text-2xl">
          <Link to={"/"}>Ecom-Shop</Link>
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-lg">
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/cart" className="relative">
      <BsCart3 size={28} className="hover:text-yellow-400 transition duration-300" />
      {cartItem.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {cartItem.length}
        </span>
      )}
    </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"/signup"}
              className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md transition"
            >
              Signup
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="md:hidden cursor-pointer"
        >
          {showSidebar ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-screen bg-black transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 shadow-lg md:hidden flex flex-col p-6`}
      >
        <h3 className="text-2xl font-bold mb-6">Ecom-Shop</h3>
        <ul className="flex flex-col gap-6 text-lg">
          <li>
            <Link
              to={"/"}
              onClick={() => setShowSidebar(false)}
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              onClick={() => setShowSidebar(false)}
              className="hover:text-yellow-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/cart"}
              onClick={() => setShowSidebar(false)}
              className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
            >
              <BsCart3 size={24} />
              {cartItem.length > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItem.length}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              onClick={() => setShowSidebar(false)}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"/signup"}
              onClick={() => setShowSidebar(false)}
              className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-md transition"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
