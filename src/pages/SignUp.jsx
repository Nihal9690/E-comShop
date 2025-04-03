import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const Signup = () => {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();

  let arr = JSON.parse(localStorage.getItem("Ecom")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (obj.name && obj.email && obj.password) {
      let find = arr.find((ele) => ele.email === obj.email);

      if (find) {
        return alert("User already registered");
      } else {
        arr.push(obj);
        localStorage.setItem("Ecom", JSON.stringify(arr));
        navigate("/login");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-sm w-full p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h3>
        
        <label className="block text-gray-600 mb-1">Name</label>
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
          <FaUser className="text-gray-400 mr-2" />
          <input ref={nameRef} className="w-full outline-none" type="text" placeholder="Enter your name" />
        </div>

        <label className="block text-gray-600 mb-1">Email</label>
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input ref={emailRef} className="w-full outline-none" type="email" placeholder="Enter your email" />
        </div>

        <label className="block text-gray-600 mb-1">Password</label>
        <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
          <FaLock className="text-gray-400 mr-2" />
          <input ref={passwordRef} className="w-full outline-none" type="password" placeholder="Enter your password" />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Sign Up
        </motion.button>

        <p className="text-center mt-4 text-gray-500">
          Already have an account? <Link className="text-blue-500" to={'/login'}>Login</Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Signup;
