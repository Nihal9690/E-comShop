import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { FaUser, FaSignInAlt, FaBars, FaTimes, FaHome, FaStore } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import UserContext from "../context/UserContext";
import UserContext2 from "../context/UserContext2";

const Navbar = () => {
  const { cartItem } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);


const userStore = useContext(UserContext2)
console.log(userStore)
let login = userStore.user.login
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Icon */}
        <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <IoStorefrontSharp size={28} className="text-blue-600" />
          <Link to="/">E-Shop</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700">
        {login===true && <li>
          <Link to="/" className="flex items-center gap-2 hover:text-blue-600 transition duration-300">
            <FaHome /> Home
          </Link>
        </li>}
         
        { login===true && <li>
            <Link to="/cart" className="flex items-center gap-2 hover:text-blue-600 transition duration-300 relative">
              <MdAddShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{cartItem.length}</span>
            </Link>
          </li>}
        {login===false &&  <li>
            <Link to="/login" className="flex items-center gap-2 hover:text-blue-600 transition duration-300">
              <FaSignInAlt /> Login
            </Link>
          </li>}
        { login===false && <li>
            <Link to="/signup">
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Sign Up
              </button>
            </Link>
          </li>}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md p-4 space-y-4 text-gray-700">
        { login===true && <li>
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaHome /> Home
            </Link>
          </li>}
        
        { login===true && <li>
            <Link to="/cart" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <MdAddShoppingCart size={24} /> Cart ({cartItem.length})
            </Link>
          </li>}
         {login===false && <li>
            <Link to="/login" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <FaSignInAlt /> Login
            </Link>
          </li>}
        {  login===false &&<li>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Sign Up
              </button>
            </Link>
          </li>}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
