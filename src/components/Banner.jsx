import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all"
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all"
    onClick={onClick}
  >
    <ChevronLeft size={24} />
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://img.freepik.com/premium-psd/black-friday-sale-social-media-post-instagram-post-web-banner-facebook-cover-template_220443-1071.jpg",
    "https://pixelixe.com/blog/images/250/e-commerce-banner-strategy.jpg",
    "https://t4.ftcdn.net/jpg/03/48/05/47/360_F_348054737_Tv5fl9LQnZnzDUwskKVKd5Mzj4SjGFxa.jpg",
    'https://www.vecteezy.com/vector-art/4299835-online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-vector-illustration-search',

    'https://www.vecteezy.com/vector-art/7153463-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept'
  ];

  return (
    <div className="w-full mx-auto mt-6 rounded-2xl shadow-2xl overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-8">
        Featured Products
      </h2>
      <Slider {...settings}>
        {images.map((product, index) => (
          <div key={index} className="relative flex justify-center items-center">
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
              <img
                src={product}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
         
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
