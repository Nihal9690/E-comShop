import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ViewProduct = ({ getFromChild }) => {
  const location = useLocation();
  
  // Ensure safe access to location.state
  const product = location.state?.ele || {};
  const allProducts = location.state?.allProducts || [];

  const [selectedImage, setSelectedImage] = useState(product.thumbnail || "");

  return (
    <div className="w-full flex flex-col lg:flex-row items-center p-8 min-h-screen bg-gray-100">
      
      {/* Left Section: Product Images */}
      <div className="lg:w-1/2 w-full flex flex-col items-center gap-4">
        <img 
          src={selectedImage} 
          className="w-full max-w-md h-[400px] object-contain rounded-lg shadow-lg bg-white p-4"
          alt="Product"
        />
        <div className="flex gap-2 justify-center">
          {product.images?.map((url, i) => (
            <img 
              key={i} 
              onClick={() => setSelectedImage(url)} 
              className="w-20 h-20 object-cover cursor-pointer border border-gray-300 rounded-md shadow-md hover:scale-105 transition"
              src={url} 
              alt={`Thumbnail ${i + 1}`} 
            />
          ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600"><b>Availability:</b> {product.availabilityStatus || "In Stock"}</p>
        <p><b>Brand:</b> {product.brand}</p>
        <p><b>Price:</b> ${product.price}</p>
        <p><b>Category:</b> {product.category}</p>
        <p><b>Discount:</b> {product.discountPercentage}%</p>

        <button 
          onClick={() => getFromChild(product)} 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition w-full"
        >
          Add to Cart
        </button>

        {/* Accordion Section */}
        <Accordion className="mt-4">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-semibold">Product Details</Typography>
          </AccordionSummary>
          <AccordionDetails className="text-gray-700">
            <p><b>Rating:</b> {product.rating}</p>
            <p><b>Min Order Quantity:</b> {product.minimumOrderQuantity || "N/A"}</p>
            <p><b>Return Policy:</b> {product.returnPolicy || "Not Available"}</p>
            <p><b>Shipping:</b> {product.shippingInformation || "Standard Shipping Available"}</p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mt-4">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="font-semibold">Additional Info</Typography>
          </AccordionSummary>
          <AccordionDetails className="text-gray-700">
            <p><b>Stock:</b> {product.stock || "Available"}</p>
            <p><b>Warranty:</b> {product.warrantyInformation || "1 Year"}</p>
            <p><b>Weight:</b> {product.weight || "N/A"}</p>
            <p><b>Dimensions:</b> {product.dimensions?.width || "N/A"} x {product.dimensions?.height || "N/A"} x {product.dimensions?.depth || "N/A"}</p>
            <p>{product.description}</p> 
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ViewProduct;
