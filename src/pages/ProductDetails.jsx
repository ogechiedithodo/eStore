import Header from "../components/Header";
import "../styles/productdetails.css";
import Footer from "../components/Footer";
const ProductDetails = () => {
  return (
    <div className="product-details-body">
      <Header />
      <div className="product-details-hero">
        <div className="product-details-img">
          <img src="/productdetails img.png" alt="" />
        </div>
        <div className="carousel-container">
          <div className="img-holder">
            <img src="/carousel img.webp" alt="" />
            
             </div>
        </div>
      </div>
      <div className="quantity">
        <div className="quantity-container">
          <div className="quantity-header">
            <h1>
              Foam filling cotton slow
              <br />
              rebound pillows
            </h1>
          </div>
          <div className="quantity-content">
            <p>
              Seamlessly empower fully researched growth strategies and
              interoperable internal or <br />
              “organic” sources. Credibly innovate granular internal or
              “organic” sources whereas high
              <br />
              standards in web-readiness. Credibly innovate granular internal or
              organic sources whereas
              <br /> high standards in web-readiness. Energistically scale
              future-proof core competencies vis-a-
              <br />
              vis impactful experiences. Dramatically synthesize integrated
              schemas. with optimal
              <br /> networks.
            </p>
          </div>
          <div className="quantity-increment">
            <div className="add-decrease-quantity">
              <span className="text-quantity">Quantity</span>
              <span className="box-quantity">
                <div className="main-box">
                  <span>-</span>
                  <span className="grey">1</span>
                  <span>+</span>
                </div>
              </span>
              <span className="amount-quantity">$5</span>
            </div>
            <div className="add-button">
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>
      <section className="promotion">
        <div className="promotion-container">
          <div className="promotion-content">
            <h1> Get promotions & updates!</h1>
            <br />
            <p>
              
              Seamlessly empower fully researched growth strategies and
              interoperable internal or <br />
              “organic” sources credibly innovate granular internal .{" "}
            </p>
          </div>
          <div className="promotion-input">
            <input type="text" placeholder="Enter your Email"/>
            <span className="btn-promotion">Subscribe</span>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};
export default ProductDetails;
