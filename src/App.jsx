import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ViewProduct from './pages/ViewProduct';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import AboutUs from './pages/AboutUs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItem, setCartItem] = useState([]); 

  const getFromChild = (product) => {
    console.log(product);
    product.quantity = 1; 
    
    const isAlreadyInCart = cartItem.find((item) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.warning("Already added to cart", { position: "top-center" });
    } else {
      setCartItem([...cartItem, product]);
      toast.success("Item added successfully", { position: 'top-center' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <BrowserRouter>
        <div className="h-[67px] bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg">
          <Navbar cartItem={cartItem} />
        </div>
        <Routes>
          <Route path="/" element={<Home getFromChild={getFromChild} cartItem={cartItem} />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/view" element={<ViewProduct getFromChild={getFromChild} />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} setCartItem={setCartItem} />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
