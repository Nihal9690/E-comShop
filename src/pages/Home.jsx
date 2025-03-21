import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaEye } from "react-icons/fa";
import FeaturedItem from "../components/FeaturedItem";
import Banner from "../components/Banner";


const Home = ({ getFromChild }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch("https://www.dummyjson.com/products?limit=0");
        let data = await res.json();
        setAllProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <Banner />
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        🛍️ Explore Our Products
      </h1>
      <FeaturedItem smartProducts={allProducts.filter(item => item.category === 'smartphones')} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {allProducts.map((product, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-40 h-40 object-cover rounded-md shadow-md"
            />
            <p className="text-lg font-semibold mt-3 text-center">{product.title}</p>
            <div className="flex items-center justify-between w-full mt-2">
              <span className="text-xl font-bold text-green-600">${product.price}</span>
              <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">{product.category}</span>
            </div>
            <div className="flex w-full gap-2 mt-4">
              <Link to="/view" state={product} className="flex-1 flex items-center justify-center bg-yellow-500 text-white py-2 rounded-md shadow-md hover:bg-yellow-400 transition">
                <FaEye className="mr-2" /> View
              </Link>
              <button onClick={() => getFromChild(product)} className="flex-1 flex items-center justify-center bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-500 transition">
                <FaCartPlus className="mr-2" /> Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
