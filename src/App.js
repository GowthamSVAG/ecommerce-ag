import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderPage from "./pages/OrderPage";

function App() {
  const[cartItems,setCartItem]=useState([]);
  return (
    <div className="App">
       <ToastContainer position="top-center" theme="dark"/>
      <Router>
        <Header cartItems ={cartItems}/>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/prod-detail/:id" element={<ProductDetail cartItems={cartItems} setCartItem={setCartItem}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItem={setCartItem}/>}/>
          <Route path="/order" element={<OrderPage/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
