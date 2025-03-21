import React from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Store</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Welcome to **ShopEase**, your go-to destination for premium quality products at unbeatable prices. 
            We believe in delivering **style, comfort, and convenience** with every purchase. 
          </p>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fast Shipping */}
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="Fast Shipping" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Fast Shipping</h3>
              <p className="text-gray-500">We ensure **quick and safe delivery** of your orders within days.</p>
            </div>
  
            {/* Quality Assurance */}
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <img src="https://cdn-icons-png.flaticon.com/512/1903/1903162.png" alt="Quality" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Top Quality</h3>
              <p className="text-gray-500">Every product is **handpicked and quality checked** before delivery.</p>
            </div>
  
            {/* Customer Support */}
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="Support" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">24/7 Support</h3>
              <p className="text-gray-500">Our support team is available **24/7 to assist you** with any queries.</p>
            </div>
          </div>
  
          <div className="mt-12">
            <Link to="/" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition">
              Start Shopping 🛍️
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  