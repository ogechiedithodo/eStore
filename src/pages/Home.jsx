import React from "react";
import Header from "../components/Header";
import "../styles/Home.css";

const Home = () => {
    return(
        <div className="home-body">
        <Header />
        <div className='hero-1'>
         <div className='empty-div'>
            
         </div>
         <div className='her0-1-write-up'>
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
                      <div>

                      </div>
                      <div>
                        
                      </div>
                    </div>
                    <div className="category-img2">

                    </div>
                    <div className="category-img3">

                    </div>
                </aside>
         </div>
        </div>
      
        
    )
    };
    export default Home;