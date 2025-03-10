import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { IoCart } from "react-icons/io5";

const Header = () => {

  const navigate = useNavigate(); 

  return (
    <div className="HeaderBody">
      <div className="top-header">
        <div className="top-header-left">
          <div className="header-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="estore">
            
          </div>
        </div>
        <div className="top-header-right">
          <div className="top-header-img-holder">
            <HiMiniComputerDesktop size={30} />
          </div>
          <div className="top-header-img-holder">
            <FaTabletAlt size={25} />
          </div>
          <div className="top-header-img-holder">
            <MdOutlinePhoneIphone size={30} />
          </div>
          <div className="cart-holder">
            <PiShoppingCartFill size={30} />
          </div>
          <div className="top-header-img-holder">
            <CgClose size={30} />
          </div>
        </div>
      </div>

      <div className="middle-header">
        <div className="left-middle-header">
          <div className="usa-logo">
            <span>
              <img src="/header_icon.png.webp" alt="USA Flag Icon" />
            </span>
            <span>USA</span>
            <span>
              <RiArrowDropDownLine size={40} />
            </span>
          </div>
          <div className="num">
            <p>+777 2345 7886</p>
          </div>
        </div>
        <div className="right-middle-header">
          <NavLink to="/login" className="right-header-text">
            <p>My Account</p>
          </NavLink>
          <NavLink to="/productcategory" className="right-header-text">
            <p>Wish List</p>
          </NavLink>
          <NavLink to="/shoppingcart" className="right-header-text">
            <p>Shopping</p>
          </NavLink>
          <NavLink to="/shoppingcart" className="right-header-text">
            <p>Cart</p>
          </NavLink>
          <NavLink to="/checkout" className="right-header-text">
            <p>Checkout</p>
          </NavLink>
        </div>
      </div>

      <section className="buttom-header">
        <div className="buttom-header-logo">
          <img src="/logo.png.webp" alt="Logo" />
        </div>
        <article className="buttom-header-pages">
          <NavLink to="/" className="home">
            <p>Home</p>
          </NavLink>
          <NavLink to="/checkout" className="checkout">
            <p>Checkout</p>
          </NavLink>
          <NavLink to="/shoppingcart" className="shopping-cart">
            <p>Shopping Cart</p>
          </NavLink>
          <NavLink to="/productdetails" className="product-details">
            <p>Product Details</p>
          </NavLink>
          <NavLink to="/productcategory" className="product-category">
            <p>Product Category</p>
          </NavLink>
        </article>
        <section className="search-bar">
          <div className="search">
            <div className="input-holder">
              <input type="text" placeholder="Search products" />
              <div className="icon">
                <IoSearch />
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="heart">
              <GoHeart size={20} />
              <div className="top">02</div>
            </div>
            <div className="heart">
              <IoCart size={20} />
              <div className="top">02</div>
            </div>
          </div>
          <div className="signin">
            <div className="btn" onClick={() => navigate("/login")} >
              <p>Sign In</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Header;
