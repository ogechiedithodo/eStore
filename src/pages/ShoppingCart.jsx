import React from 'react'
import "../styles/shoppingcart.css"
import Footer from '../components/Footer'
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";


const ShoppingCart = () => {
  return (
    <div className='mainShoppingCart'>
      <div className='landingPage'>
        <section className='imgDiv'>
          <div>
            <h1 style={{ fontSize: "50px" }}>Card List</h1>
          </div>
        </section>
      </div>

      <section className='productList'>
        <nav>
          <div>Product</div>
          <div style={{ width: "50%", gap: "15px", padding: "15px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <span>Price</span>
            <span style={{ paddingLeft: "10px" }}>Quality</span>
            <span>Total</span>
          </div>
        </nav>

        <article className='product'>
          <section>
            <div style={{ width: "30%", height: "70%", backgroundColor: "green" }}>
              <img src="" alt="" />
            </div>
            <div>
              <span style={{ color: "rgb(107, 101, 96)", fontSize: "16px", fontFamily: "sans-serif" }}> Minimalistic shop for mutipurpose use</span>
            </div>
          </section>
          <section>
            <div style={{ width: "30%", height: "37%", fontFamily: `"Playfair Display", serif`, display: "flex", justifyContent: "center", alignItems: "center", color: "rgb(107, 101, 96)" }}> $360.00</div>
            <div style={{ width: "30%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span style={{
                width: "70%", height: "41%", borderRadius: "5px", border: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: " #e0e0e0",
                display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column"
              }}>
                <div style={{ width: "30%", height: "58%", border: "0.7px solid #e0e0e0", }}></div>
                <div style={{ width: "30%", height: "58%", border: "0.7px solid #e0e0e0", }}></div>
              </span>
            </div>
            <div style={{ width: "30%", height: "37%", fontFamily: `"Playfair Display", serif`, display: "flex", justifyContent: "center", alignItems: "center", color: "rgb(107, 101, 96)" }}> $720.00</div>
          </section>
        </article>


        <article className='product'>
          <section>
            <div style={{ width: "30%", height: "70%", backgroundColor: "green" }}>
              <img src="" alt="" />
            </div>
            <div>
              <span style={{ color: "rgb(107, 101, 96)", fontSize: "16px", fontFamily: "sans-serif" }}> Minimalistic shop for mutipurpose use</span>
            </div>
          </section>
          <section>
            <div style={{ width: "30%", height: "37%", fontFamily: `"Playfair Display", serif`, display: "flex", justifyContent: "center", alignItems: "center", color: "rgb(107, 101, 96)" }}> $360.00</div>
            <div style={{ width: "30%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span style={{
                width: "70%", height: "41%", borderRadius: "5px", border: "1px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: " #e0e0e0",
                display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column",
              }}>
                <div style={{ width: "30%", height: "58%", border: "0.7px solid #e0e0e0", }}></div>
                <div style={{ width: "30%", height: "58%", border: "0.7px solid #e0e0e0", }}></div>
              </span>
            </div>
            <div style={{ width: "30%", height: "37%", fontFamily: `"Playfair Display", serif`, display: "flex", justifyContent: "center", alignItems: "center", color: "rgb(107, 101, 96)" }}> $720.00</div>
          </section>
        </article>

        <article className='updateCart'>
          <div className='updtaeCartHover'>Update Cart</div>
          <div className='updtaeCartHover'>Close Cupon</div>
        </article>
      </section>


      <div className='totalDiv'>
        <article className='subTotal'>
          <div>subtotal</div>
          <div>$216.00</div>
        </article>

        <section className='calDiv'>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <nav  style={{ width: "30%", height:"100%", display: "flex", justifyContent: "center", alignItems:"center", gap: "20px" }}>
              <p style={{fontFamily: `"Playfair Display", serif`}}>Support</p>
            </nav>
            <nav style={{ width: "50%", height:"100%", display: "flex", justifyContent: "center", alignItems:"center", gap: "20px" }}>
              <p>Flat Rate: $5.00</p>
              <input type="radio" style={{ width: "18px", height: "18px" }} />
            </nav>
          </div>
          <div>
            <p>Free Shipping</p>
            <input type="radio" style={{ width: "18px", height: "18px" }} />
          </div>
          <div>
            <p>Flat Rate: $10.00</p>
            <input type="radio" style={{ width: "18px", height: "18px" }} />
          </div>
          <div>
            <p>Flat Rate: $2.00</p>
            <input type="radio" style={{ width: "18px", height: "18px" }} />
          </div>


          <article className='updateDetails'>
            <section style={{display:"flex", justifyContent:"flex-end", gap:"10px", padding:"10px"}}>
              <span style={{fontFamily: `"Playfair Display", serif`, color:"#797c96", fontSize:"15px"}}>Caculate Shipping</span>
              <IoMdArrowDropdown />
            </section>
            <section>
              <p style={{color:"#24323d"}}>Bangladesh</p>
              <RiArrowDropDownLine style={{color:"#797c96"}}/>
            </section>
            <section>
            <p style={{color:"#24323d"}}>Select a state</p>
            <RiArrowDropDownLine style={{color:"#797c96"}}/>
            </section>
            <section></section>
          </article>

          <nav className='updateDetailsBox'>
            <span>Updated Details</span>
          </nav>
        </section>


        <div className='divBox'>
          <section className='endBoxes'>Continue Shopping</section>
          <section className='endBoxes'>Proceed to Checkout</section>
        </div>

      </div>

      {/* <div className='endDiv'>
          
          <span></span>
        </div> */}

      <Footer />
    </div>
  )
}

export default ShoppingCart