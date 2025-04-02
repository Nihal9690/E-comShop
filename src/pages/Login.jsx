import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import UserContext2 from "../context/UserContext2";

const Login = () => {
  const userStore = useContext(UserContext2);
  const emailRef = useRef();
  const passwordRef = useRef();

  const arr = JSON.parse(localStorage.getItem("Ecom")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    let find = arr.find((ele) => ele.email === obj.email);

    if (find) {
      if (find.password === obj.password) {
        localStorage.setItem("Login", JSON.stringify({ email: obj.email, login: true }));
        userStore.setUser({ email: obj.email, login: true });
      } else {
        return alert("Wrong password");
      }
    } else {
      return alert("User not found");
    }
  };

  const el = useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Login", "Signup", "Portfolio"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.form 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white max-w-sm w-full p-6 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Welcome to <span ref={el} className="text-blue-500"></span>
        </h3>
        <label className="block text-gray-600 mb-1">Email</label>
        <div className="flex items-center border rounded px-3 py-2 mb-3">
          <FaUser className="text-gray-400 mr-2" />
          <input ref={emailRef} className="w-full outline-none" type="text" placeholder="Enter your email" />
        </div>
        <label className="block text-gray-600 mb-1">Password</label>
        <div className="flex items-center border rounded px-3 py-2 mb-4">
          <FaLock className="text-gray-400 mr-2" />
          <input ref={passwordRef} className="w-full outline-none" type="password" placeholder="Enter your password" />
        </div>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit} 
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Login
        </motion.button>
        <p className="text-center mt-3 text-gray-500">
          Don't have an account? <Link className="text-blue-500" to={'/signup'}>Register</Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
