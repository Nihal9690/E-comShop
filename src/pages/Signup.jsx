import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Signup Form Submission
  const handleSignup = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    toast.success("Account Created Successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500 text-lg" />
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-gray-500 text-lg" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500 text-lg" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-4">
          Already have an account? <span className="text-blue-600 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
