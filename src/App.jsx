import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for the home page or product listing */}
        <Route path="/" element={<Login />} />
        
        {/* Other routes */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
