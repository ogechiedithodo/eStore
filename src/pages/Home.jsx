import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";

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
                <aside>
                  <p>All</p>
                  <p>New</p>
                  <p>Featured</p>
                  <p>Offer</p>
                </aside>
            </section>

         </div>
         <div className="hero-2">
            <img src="public/card-man.png" alt="" width={150} />
            <div className="hero-2-empty">

            </div>
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
                    <img src="public/collection3.png" alt="" width={70}/>
                  </div>
                  <div>
                     <p>Menz Winter Jacket</p>
                     <img src="public/collection4.png" alt=""  width={70}/>
                  </div>
                  <div>
                    <p>Menz Winter Jacket</p>
                    <img src="public/collection5.png" alt=""  width={70}/>
                  </div>
               </div>
           </div>
         </div>
         <div className="hero-3">
            <div className="hero-3-img" style={{display: 'flex', flexDirection: 'row'}} >
              <img src="public/latest-man.png" alt="" width={350}/>
              <div className="hero-3-write-up" >
               <h1>Get Our Latest Offers News</h1>
               <p>Subscribe to our Newsletter</p>
              </div>
            </div>
            <div>

            </div>
         </div>
         <Footer />
        </div>
      
        
    )
    };
    export default Home;