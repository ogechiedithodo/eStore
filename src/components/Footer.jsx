import React from 'react'
import "../styles/footer.css"
import { CiHeart } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { HiGlobeAlt } from "react-icons/hi2";
import { AiOutlineBehance } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
       <article className='topFooter'>
            <div className='writeUpBox'>
                <section>
                  <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="" style={{width:"100px", height:"30px"}}/>
                </section>
                <article>
                  <p style={{gap:"20px", display:"flex", flexDirection:"column"}}>
                    Our mission is to provide the best quality products at the best price.
                  </p>
                </article>
            </div>
            
            <div className='writeUpBox'>
                <section><h1 style={{color:"black",  fontFamily: "sans-serif"}}>Quick Link</h1></section>
                <article>
                  <span className='textHover'>About</span>
                  <span className='textHover'>offers & Discount</span>
                  <span className='textHover'>Get Cuppon</span>
                  <span className='textHover'>Contact us</span>
                </article>
            </div>
           
            <div className='writeUpBox'>
            <section><h1 style={{color:"black",  fontFamily: "sans-serif"}}>New Product</h1></section>
                <article>
                  <span className='textHover'>Women Cloth</span>
                  <span className='textHover'>Fashion Assesories</span>
                  <span className='textHover'>Man Assesories</span>
                  <span className='textHover'>Rubber Made Toy</span>
                </article>
            </div>
           
            <div className='writeUpBox' style={{width: '30%', height:"100%", paddingLeft:"30px"}}>
            <section><h1 style={{color:"black",  fontFamily: "sans-serif"}}>Support</h1></section>
                <article>
                  <span className='textHover'>Frequetly asking question</span>
                  <span className='textHover'>Terms and Codition</span>
                  <span className='textHover'>Privacy Policy</span>
                  <span className='textHover'>Privacy Policy</span>
                  <span className='textHover'>Report a Payment issue</span>
                </article>
            </div>
       </article>
       
       
       
       <article className='buttomFooter'>
          <nav className='wrteupButtom'>
            <p style={{color:"gray"}}>
             Copywrite © 2021 All Rights Reserved | This Templateis made with <CiHeart style={{color:"#4277b7", height:"20px", width:"20px"}}/>  by <span style={{color:"#4277b7"}}>Colorib</span>
              </p>
          </nav>
          <nav className='buttomIcon'>
            <span><TiSocialTwitter className='bottomIconMain'/></span>
            <span><TiSocialFacebook className='bottomIconMain'  /></span>
            <span><AiOutlineBehance className='bottomIconMain'/></span>
            <span><HiGlobeAlt className='bottomIconMain'/></span>
          </nav>
       </article>
    </div>
  )
}

export default Footer