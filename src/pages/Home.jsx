import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";
import All from "../components/All";
import New from "../components/New";
import Offer from "../components/Offer";
import Featured from "../components/Featured";

const Home = () => {
  const [activeTab, setActiveTab] = React.useState("All");

  return (
    <div className="home-body">
      <Header />
      <div className="hero-1">
        <div className="empty-div"></div>
        <div className="her0-1-write-up">
          <aside>
            <h1>60% Discount</h1>
            <h2>Winter Collection</h2>
            <p>Best Cloth collection by 2020!</p>
          </aside>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="category">
        <h2>Shop By Category</h2>
        <aside>
          <div className="category-img1">
            <div className="category-img1-space">
              <h2>Owmen`s</h2>
              <p>Best New Deal</p>
              <h3>New Collection</h3>
            </div>
          </div>
          <div className="category-img2">
            <div className="category-img2-text">
              <h3>Discout</h3>
              <h2>Winter Cloths</h2>
              <p>New Collection</p>
            </div>
          </div>
          <div className="category-img3">
            <div className="category-img1-space">
              <h2>Man`s Cloth</h2>
              <p>Best New Deal</p>
              <h3>New Collection</h3>
            </div>
          </div>
        </aside>
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
      <div className="hero-2">
        <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png" alt="" width={150} />
        <div className="hero-2-empty"></div>
        <div className="hero-2-write-up">
          <h1>Find The Best Product from Our Shop</h1>
          <p>Designers who are interesten creating state ofthe.</p>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="hero-complex">
        <div>
          <h1>Best Collection of This Month</h1>
          <p>Designers who are interesten crea.</p>
          <p>Shop Now</p>
        </div>
        <div className="hero-complex-second-born">
          <div className="hero-complex-second-born-1">
            <div>
              <p>Menz Winter Jacket</p>
              <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection3.png" alt="" width={70} />
            </div>
            <div>
              <p>Menz Winter Jacket</p>
              <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection4.png" alt="" width={70} />
            </div>
            <div>
              <p>Menz Winter Jacket</p>
              <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/collection5.png" alt="" width={70} />
            </div>
          </div>
        </div>
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
export default Home;
