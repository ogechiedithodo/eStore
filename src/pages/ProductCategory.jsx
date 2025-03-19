import Header from "../components/Header";
import "../styles/productcategory.css";
import { useState } from "react";
import All from "../components/All";
import Featured from "../components/Featured";
import New from "../components/New";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProductCategory = () => {

 const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="product-category-body">
      <Header />
      <div className="product-category-hero">
        <div className="product-category-img-holder">
          <img src="/productcategoryimg.png" alt="" />
        </div>
      </div>
      <div className="home-product">
              <section className="home-product-header">
                <aside>
                  <h1>Latest Product</h1>
                </aside>
                <aside className="home-product-header-aside">
                  <p className={activeTab === "All" ? "active-tab" : "" } onClick={() => setActiveTab("All")}>All</p>
                  <p className={activeTab === "New" ? "active-tab" : "" } onClick={() => setActiveTab("New")}>New</p>
                  <p className={activeTab === "Featured" ? "active-tab" : "" } onClick={() => setActiveTab("Featured")}>Featured</p>
                  <p className={activeTab === "Offer" ? "active-tab" : "" } onClick={() => setActiveTab("Offer")}>Offer</p>
                </aside>
              </section>
              <section className="home-product-body">
                {activeTab === "All" && <All/> }
                {activeTab === "New" && <New/>}
                {activeTab === "Featured" && <Featured/>}
                {activeTab === "Offer" && <Offer/>}
              </section>
            </div>
            <div className="hero-3">
        <div className="hero-3-img" style={{ display: "flex", flexDirection: "row" }} >
          <div className="hero-3-write-up">
            <h1>Get Our <br />
             Latest Offers News</h1>
            <p>Subscribe to our Newsletter</p>
          </div>
        </div>
        <div className="hero-3-input-container">
           <div className="hero-3-input">
           <input type="text" placeholder="Your email here"/>
           <button>Shop Now</button>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductCategory;
