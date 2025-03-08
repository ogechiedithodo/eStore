import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="AppBody">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productcategory" element={<ProductCategory />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
