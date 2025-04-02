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
    <div className="px-4 sm:px-6 lg:px-12 py-10 bg-gray-100 min-h-screen">
      <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome to Our <span ref={typedElement} className="text-blue-600"></span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        {sliceArr.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white border rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.03] overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-2 sm:p-4">
              <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden rounded-xl">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xs sm:text-sm md:text-lg font-semibold text-gray-800 truncate mt-2 mb-1">{product.title}</h2>
              <p className="text-xs sm:text-sm text-gray-500 flex items-center mb-2">
                <MdCategory className="text-blue-500 mr-1" />
                {product.category}
              </p>
              <div className="flex justify-between items-center mb-3 text-xs sm:text-sm">
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 sm:py-2 rounded-lg flex justify-center items-center text-xs sm:text-sm font-medium transition"
                  >
                    <FaEye className="mr-2" />
                    View
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() => AddToCart(product)}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-1 sm:py-2 rounded-lg flex justify-center items-center text-xs sm:text-sm font-medium transition"
                >
                  <FaCartPlus className="mr-2" />
                  Add
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
