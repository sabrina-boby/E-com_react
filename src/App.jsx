import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ProductList from "./components/ProductList/ProductList";
import Signup from "./components/Signup/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/footer" element={<Footer />} /> */}
        {/* <Route path="/header" element={<Header />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
