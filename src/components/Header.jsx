import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoCart } from "react-icons/io5";




const Header = () => {
  const Nav = useNavigate();
  return (
    <div className="HeaderBody">
      <div className="top-header">
        <div className="top-header-left">
          <div className="header-logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="estore">
            <span>+</span>
            <h2>ESTORE</h2>
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
              <img src="/header_icon.png.webp" alt="" />
            </span>
            <span>USA</span>
            <span>
              <RiArrowDropDownLine size={40} />
            </span>
          </div>
          
          <div className="num">
            <p> +777 2345 7886</p>
          </div>
        </div>
        <div className="right-middle-header">
          <div className="right-header-text" onClick={()=>Nav("/login")}>
            <p>My Account</p>
          </div>
          <div className="right-header-text">
            
            <p>Wish List</p>
          </div>
          <div className="right-header-text">
            
            <p>Shopping</p>
          </div>
          <div className="right-header-text">
            
            <p>Cart</p>
          </div>
          <div className="right-header-text">
            
            <p>Checkout</p>
          </div>
        </div>
      </div>
      <section className="buttom-header">
        <div className="buttom-header-logo">
          <img src="/public/logo.png.webp" alt="" />
        </div>
        <article className="buttom-header-pages">
          <div className="home" onClick={() => Nav("/")}>
            <p>Home</p>
          </div>
          <div className="checkout" onClick={() => Nav("/checkout")}>
            <p>Checkout</p>
          </div>
          <div className="shopping-cart" onClick={() => Nav("/shoppingcart")}>
            <p>Shopping Cart</p>
          </div>
          <div
            className="product-details"
            onClick={() => Nav("/productdetails")}
          >
            <p>Product Details</p>
          </div>
          <div
            className="product-category"
            onClick={() => Nav("/productcategory")}
          >
            <p>Product Category</p>
          </div>
        </article>
        <section className="search-bar">
          <div className="search">
            <div className="input-holder">
              <input type="text" placeholder="Search products" />
              <div className="icon">
              <IoSearch/>

              </div>
            </div>
          </div>
          <div className="cart">
            <div className="heart">
              < GoHeart size={20}/>
              <div className="top">02</div>
            </div>
            <div className="heart">
              <IoCart size={20}/>
            <div className="top">02</div>

            </div>
          </div>
          <div className="signin">
            <div className="btn">
            <p>Sign In</p>
            </div>
            </div>

        </section>
      </section>
    </div>
  );
};
export default Header;
