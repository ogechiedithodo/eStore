import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Checkout from "./pages/Checkout";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/productcategory", element: <ProductCategory /> },
  { path: "/productdetails", element: <ProductDetails /> },
  { path: "/shoppingcart", element: <ShoppingCart /> },
]);

const App = () => {
  return (
    <div className="AppBody">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
