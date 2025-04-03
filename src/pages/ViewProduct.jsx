import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { FaChevronDown, FaChevronUp, FaShoppingCart } from "react-icons/fa";

const ViewProduct = () => {
  const { viewItem, AddToCart } = useContext(UserContext);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-6 border border-gray-300 transform transition duration-500 hover:scale-105">
        <img
          src={viewItem.thumbnail}
          alt={viewItem.title}
          className="w-full h-64 object-cover rounded-lg mb-4 shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-900">{viewItem.title}</h1>
        <p className="text-gray-600 text-sm uppercase tracking-wide mt-1">
          {viewItem.category}
        </p>
        <p className="text-gray-900 font-bold text-2xl mt-2">
          ${viewItem.price}
        </p>

        <button
          className="mt-4 flex items-center justify-between w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition shadow-md"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>More Details</span>
          {showDetails ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {showDetails && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300 shadow-sm">
            <p className="text-gray-700 text-sm">{viewItem.description}</p>
            <p className="text-gray-600 text-sm mt-2">
              Brand:{" "}
              <span className="font-semibold text-gray-900">
                {viewItem.brand}
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              Rating:{" "}
              <span className="font-semibold text-yellow-500">
                {viewItem.rating} ⭐
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              Stock:{" "}
              <span
                className={`font-semibold ${
                  viewItem.stock > 10 ? "text-green-600" : "text-red-600"
                }`}
              >
                {viewItem.stock} left
              </span>
            </p>
          </div>
        )}

        <button
          onClick={() => AddToCart(viewItem)}
          className="mt-6 w-full flex items-center justify-center bg-green-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition shadow-md"
        >
          <FaShoppingCart className="mr-2" /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
