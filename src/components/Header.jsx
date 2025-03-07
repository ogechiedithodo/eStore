import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const Nav = useNavigate();
  return (
    <div className="HeaderBody">
      <div className="home" onClick={() => Nav("/")}>
        <p>Home</p>
      </div>
      <div className="checkout" onClick={() => Nav("/checkout")}>
        <p>Checkout</p>
      </div>
      <div className="shopping-cart" onClick={() => Nav("/shoppingcart")}>
        <p>Shopping Cart</p>
      </div>
      <div className="product-details" onClick={() => Nav("/productdetails")}>
        <p>Product Details</p>
      </div>
      <div className="product-category" onClick={() => Nav("/productcategory")}>
        <p>Product Category</p>
      </div>
    </div>
  );
};
export default Header;
