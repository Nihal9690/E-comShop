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


  const handleLogout= ()=>{
userStore.setUser({email:'',login:false})
localStorage.getItem("Login" ,JSON.stringify({email:'',login:false}))
setIsOpen(false)
  }


  const handleInputChanger = (e) => {
    let value = e.target.value.trim(); // Remove extra spaces
    userStore.setsearchValue(value); // Update the search value in context
  };
  
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md p-4 sticky top-0 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <IoStorefrontSharp size={28} className="text-white" />
          <Link to="/" className="hover:text-gray-200 transition">E-Shop</Link>
        </div>

{/* {search} */}
        <form >
          <input onChange={handleInputChanger} className="border" type="text"  placeholder="enter name" />
        </form>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {login && (
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-gray-200 transition"
              >
                <FaHome /> Home
              </Link>
            </li>
          )}
          {login && (
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-2 hover:text-gray-200 transition relative"
              >
                <MdAddShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                  {cartItem.length}
                </span>
              </Link>
            </li>
          )}
          {!login && (
            <li>
              <Link
                to="/login"
                className="flex items-center gap-2 hover:text-gray-200 transition"
              >
                <FaSignInAlt /> Login
              </Link>
            </li>
          )}
          {!login && (
            <li>
              <Link to="/signup">
                <button className="bg-white text-blue-600 hover:bg-gray-200 transition px-4 py-2 rounded-lg">
                  Sign Up
                </button>
              </Link>
            </li>
          )}




        { login === true &&   <li>
            
                <button onClick={handleLogout} className="bg-white text-blue-600 hover:bg-gray-200 transition px-4 py-2 rounded-lg">
                  Logout
                </button>
           
            </li>}
        
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md p-4 space-y-4 text-gray-700 rounded-lg mt-2">
          {login && (
            <li onclick={()=>setIsOpen()}>
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaHome /> Home
              </Link>
            </li>
          )}
          {login && (
            <li onclick={()=>setIsOpen()}>
              <Link
                to="/cart"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <MdAddShoppingCart size={24} /> Cart ({cartItem.length})
              </Link>
            </li>
          )}
          {!login && (
            <li onclick={()=>setIsOpen()}>
              <Link
                to="/login"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaSignInAlt /> Login
              </Link>
            </li>
          )}
          {!login && (
            <li onclick={()=>setIsOpen()}>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-lg">
                  Sign Up
                </button>
              </Link>
            </li>
          )}


{ login === true &&   <li onclick={()=>setIsOpen()}>
            
            <button onClick={handleLogout} className="bg-white text-blue-600 hover:bg-gray-200 transition px-4 py-2 rounded-lg">
              Logout
            </button>
       
        </li>}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;