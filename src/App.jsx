import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";

import UserContext2 from "./context/UserContext2";
import { Navigate } from "react-router-dom";

const App = () => {
  let userStore = useContext(UserContext2);
  console.log(userStore);
  let login = userStore.user.login;

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={login === true ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/cart"
            element={login === true ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={login === false ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={login === false ? <SignUp /> : <Navigate to="/" />}
          />
          <Route path="/view" element={  login ===true ?<ViewProduct />:<Navigate to={'/login'}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
