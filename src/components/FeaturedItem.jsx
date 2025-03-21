import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const FeaturedItem = ({ smartProducts }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-3xl overflow-hidden">
      <Slider {...settings}>
        {smartProducts.map((product, index) => (
          <Link 
            to={'/view'} 
            state={{ ele: product, allProducts: smartProducts }} 
            key={index} 
            className="flex flex-col items-center"
          >
            <div className="bg-gray-800 p-6 rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-64 h-64 object-cover rounded-2xl shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-white text-center">
              {product.title}
            </h3>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedItem;
