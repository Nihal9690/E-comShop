// 

import React, { useContext, useState, useEffect, useRef } from "react";
import { FaCartPlus, FaEye, FaStar, FaDollarSign, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Typed from "typed.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { allProduct, AddToCart, ViewCart } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const lastIndex = itemsPerPage * currentPage;
  const firstIndex = lastIndex - itemsPerPage;
  const noOfPages = Math.ceil(allProduct.length / itemsPerPage);
  const sliceArr = allProduct.slice(firstIndex, lastIndex);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < noOfPages) setCurrentPage(currentPage + 1);
  };

  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Best Deals on Electronics ⚡",
        "Latest Fashion Trends 👗",
        "Exclusive Beauty Products 💄",
        "Top-rated Home Appliances 🏡",
        "Gadgets & Accessories 📱",
        "Your One-Stop Shopping Destination 🛍️",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="px-6 sm:px-8 lg:px-12 py-10 bg-gray-100 min-h-screen">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome to Our  <span ref={typedElement} className="text-blue-600"></span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {sliceArr.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white border rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-4">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                  loading="lazy"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 truncate mb-1">{product.title}</h2>
              <p className="text-sm text-gray-500 flex items-center mb-2">
                <MdCategory className="text-blue-500 mr-1" />
                {product.category}
              </p>
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-yellow-600 flex items-center font-medium">
                  <FaStar className="mr-1" />
                  {product.rating}
                </span>
                <span className="text-green-600 flex items-center font-bold">
                  <FaDollarSign className="mr-1" />
                  {product.price}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <Link to="/view" onClick={() => ViewCart(product)} className="w-full">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex justify-center items-center text-sm font-medium transition"
                  >
                    <FaEye className="mr-2" />
                    View
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() => AddToCart(product)}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg flex justify-center items-center text-sm font-medium transition"
                >
                  <FaCartPlus className="mr-2" />
                  Add
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-2 flex-wrap">
        <button onClick={() => setCurrentPage(1)} className="px-4 py-2 rounded-full bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition">
          <FaArrowLeft />
        </button>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          Previous
        </button>
        {Array(noOfPages).fill(" ").map((_, i) => (
          i + 1 >= currentPage && i + 1 < currentPage + 5 && (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {i + 1}
            </button>
          )
        ))}
        {currentPage < noOfPages - 4 && <span className="text-gray-500">...</span>}
        <button
          onClick={handleNext}
          disabled={currentPage === noOfPages}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${currentPage === noOfPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          Next
        </button>
        <button onClick={() => setCurrentPage(noOfPages)} className="px-4 py-2 rounded-full bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Home;
