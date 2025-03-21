import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle Login Function
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password!");
      return;
    }

    if (email === "admin@example.com" && password === "password123") {
      toast.success("Login Successful!");
    } else {
      toast.error("Invalid Credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email Input */}
          <div className="relative">
            <MdEmail className="absolute left-3 top-3 text-gray-500 text-lg" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account? <span className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
