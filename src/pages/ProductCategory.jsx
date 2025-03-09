import Header from "../components/Header";
import "../styles/productcategory.css"
import { RiArrowDropDownLine } from "react-icons/ri";

const ProductCategory = () => {

    const productData = [
        {
            img: "",
            description: "Green Dreess with details",
            Price: "$40"
        },
        {
            img: "",
            description: "Green Dreess with details",
            Price: "$40"
        },
        {
            img: "",
            description: "Green Dreess with details",
            Price: "$40"
        },
        {
            img: "",
            description: "Green Dreess with details",
            Price: "$40"
        },
        {
            img: "",
            description: "Green Dreess with details",
            Price: "$40"
        },
        {
            img: "",
            description: "Green Dreess with details",
            Price: "$40"
        },
    ]
    return(
        <div className="product-category-body">
            <Header/>
            <div className="product-category-hero">
                <div className="product-category-img-holder" >
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
                            <span>   <RiArrowDropDownLine size={30}/></span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mapped-products"></section>

        </div>
    )
    };
    export default ProductCategory;