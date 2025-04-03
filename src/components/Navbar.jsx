import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { FaUser, FaSignInAlt, FaBars, FaTimes, FaHome } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import UserContext from "../context/UserContext";
import UserContext2 from "../context/UserContext2";

const Navbar = () => {
  const { cartItem } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const userStore = useContext(UserContext2);
  let login = userStore.user.login;
  
  const handleLogout = () => {
    userStore.setUser({ email: "", login: false });
    localStorage.setItem("Login", JSON.stringify({ email: "", login: false }));
    setIsOpen(false);
  };

  const handleInputChanger = (e) => {
    let value = e.target.value.trim();
    userStore.setsearchValue(value);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md p-4 sticky top-0 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <IoStorefrontSharp size={28} className="text-white" />
          <Link to="/" className="hover:text-gray-200 transition">E-Shop</Link>
        </div>

        {/* Search Bar (Responsive) */}
        <div className="hidden md:block w-1/3">
       { login && (  <input 
            onChange={handleInputChanger}
            className="w-full px-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search for products..."
          />)}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {login && (
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-gray-200 transition">
                <FaHome /> Home
              </Link>
            </li>
          )}
          {login && (
            <li>
              <Link to="/cart" className="flex items-center gap-2 hover:text-gray-200 transition relative">
                <MdAddShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {cartItem.length}
                </span>
              </Link>
            </li>
          )}
          {!login ? (
            <>
              <li>
                <Link to="/login" className="flex items-center gap-2 hover:text-gray-200 transition">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <button className="bg-white text-blue-600 hover:bg-gray-200 transition px-4 py-2 rounded-lg">
                    Sign Up
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout} className="bg-white text-blue-600 hover:bg-gray-200 transition px-4 py-2 rounded-lg">
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 rounded-lg mt-2 text-gray-700">
          {/* Mobile Search Bar */}
          <div className="mb-4">
          { login && (  <input 
            onChange={handleInputChanger}
            className="w-full px-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search for products..."
          />)}
          </div>
          <ul className="space-y-4">
            {login && (
              <li onClick={() => setIsOpen(false)}>
                <Link to="/" className="flex items-center gap-2">
                  <FaHome /> Home
                </Link>
              </li>
            )}
            {login && (
              <li onClick={() => setIsOpen(false)}>
                <Link to="/cart" className="flex items-center gap-2">
                  <MdAddShoppingCart size={24} /> Cart ({cartItem.length})
                </Link>
              </li>
            )}
            {!login ? (
              <>
                <li onClick={() => setIsOpen(false)}>
                  <Link to="/login" className="flex items-center gap-2">
                    <FaSignInAlt /> Login
                  </Link>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <Link to="/signup">
                    <button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-lg">
                      Sign Up
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li onClick={() => setIsOpen(false)}>
                <button onClick={handleLogout} className="w-full bg-white text-blue-600 hover:bg-gray-200 transition px-4 py-2 rounded-lg">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
