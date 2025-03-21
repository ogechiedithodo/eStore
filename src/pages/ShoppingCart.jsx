import React, { useContext } from 'react'
import "../styles/shoppingcart.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';
import { RiArrowDropUpLine } from "react-icons/ri";
import DropModal from '../components/DropModal';
import { usePost } from '../global/Context';
import DropModalTwo from '../components/DropModalTwo';
import { FaTrash } from "react-icons/fa6";


const ShoppingCart = () => {
  const { dropModal, drop, dropTwo, dropmodalTwo} = usePost();
  // const [count, setCount]=useState(1)


 
  return (
    <div className='mainShoppingCart'>
      <Header />
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
            <span style={{marginLeft:"93px"}}>Price</span>
            <span style={{ paddingLeft: "10px", marginRight:"60px" }}>Quality</span>
            <span>Total</span>
          </div>
        </nav>


      {
        addCart?.map((item,index)=>(
        <article className='product' key={index}>
        <section>
          <div style={{ width: "30%", height: "70%", backgroundColor: " #e0e0e0" }}>
            <img src={item.image.imageUrl} alt="" style={{width:"100%", height:"100%"}} />
          </div>
          <div>
            <span style={{ color: "rgb(107, 101, 96)", fontSize: "16px", fontFamily: "sans-serif" }}>{item.productName}</span>
          </div>
        </section>
        <section>
          <div style={{ width: "30%", height: "37%", fontFamily: `"Playfair Display", serif`, display: "flex", justifyContent: "center", alignItems: "center", color: "rgb(107, 101, 96)" }}>{item.productPrice}</div>
          <div style={{ width: "30%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{
              width: "70%", height: "41%", borderRadius: "5px", border: "1px solid #e0e0e0",  alignItems: "center",  color: " #e0e0e0",
              display: "flex", justifyContent: "space-between",  }}>
                <p style={{ width: "40%", height: "100%", display: "flex", justifyContent:"center", alignItems:"center", color:"black", fontSize:"20px", fontFamily: `"Playfair Display", serif`, paddingLeft:"20px"}}>{item.quantity}</p>
                <article style={{ width: "40%", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ width: "100%", height: "50%", border: "0.7px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "20px", cursor: "pointer", }} onClick=''>+</div>
                    <div style={{ width: "100%", height: "50%", border: "0.7px solid #e0e0e0", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "20px", cursor: "pointer" }} onClick=''>-</div>
                </article>
            </span>
          </div>
          <div style={{ width: "30%", height: "37%", fontFamily: `"Playfair Display", serif`, display: "flex", justifyContent: "center", alignItems: "center", color: "rgb(107, 101, 96)" }}> $720.00</div>
        </section>
      </article>

        ))
      }


        <article className='updateCart'>
          <div className='updtaeCartHover' onClick={clearCart}>Clear Cart</div>
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
           
                     <section onClick={ drop}>
                     <p style={{color:"#24323d"}}>Bangladesh</p>
                     {
                       dropModal ? <RiArrowDropUpLine/> : <RiArrowDropDownLine style={{color:"#797c96"}}/>
                     }
                     {
                       dropModal && <DropModal/>
                     }   
                   </section>
          
       
            <section onClick={dropTwo}>
            <p style={{color:"#24323d"}}>Select a state</p>
            {
              dropmodalTwo ? <RiArrowDropUpLine/> : <RiArrowDropDownLine style={{color:"#797c96"}}/>
            }
            {
             dropmodalTwo && <DropModalTwo/>
            }
            </section>
            <section>
            <p style={{color:"#24323d"}}>postcode/zipcode</p>
            </section>
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