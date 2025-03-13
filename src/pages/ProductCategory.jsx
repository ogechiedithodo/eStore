import Header from "../components/Header";
import "../styles/productcategory.css";
import Footer from "../components/Footer";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProductCategory = () => {
  const productData = [
    {
      img: "/product1.png",
      description: "Green Dreess with details",
      Price: "$40",
    },
    {
      img: "/product2.png",
      description: "Green Dreess with details",
      Price: "$40",
    },
    {
      img: "/product3.png",
      description: "Green Dreess with details",
      Price: "$40",
    },
    {
      img: "/product4.png",
      description: "Green Dreess with details",
      Price: "$40",
    },
    {
      img: "/product5.png",
      description: "Green Dreess with details",
      Price: "$40",
    },
    {
      img: "/product6.png",
      description: "Green Dreess with details",
      Price: "$40",
    },
  ];
  const data = [
    {img: "/cubeimg.png",
      title: "Free Shipping Method",
      content: "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
    },
    {img: "/cubeimg.png",
      title: "Free Shipping Method",
      content: "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
    },
    {img: "/cubeimg.png",
      title: "Free Shipping Method",
      content: "aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
    },
  ]
  return (
    <div className="product-category-body">
      <Header />
      <div className="product-category-hero">
        <div className="product-category-img-holder">
          <img src="/productcategoryimg.png" alt="" />
        </div>
        <div className="product-header">
          <div className="empty"></div>
          <div className="product-header-text">
            <div className="left-text">
              <span>All</span>
              <span>New</span>
              <span>Featured</span>
              <span>Offer</span>
            </div>
            <div className="right-text">
              <span>Shop By:</span>
              <span>Featured</span>
              <span>
                {" "}
                <RiArrowDropDownLine size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="mapped-products">
        <div className="product-card">
          <div className="product-img-holder">
            <img src="" alt="" />
          </div>
          <div className="product-details">
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ProductCategory;
