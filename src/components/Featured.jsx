import React from 'react'
import { CiStar } from "react-icons/ci";
import '../styles/All.css'
import { usePost } from '../global/Context';
import { PostProvider } from '../global/Context';

const All = () => {
    const {allItems,addToCart,addCart, removeFromCart} = usePost()
   

//   const allItems =[
//     {
//         image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png",
//         description:"Green Dress with Details",
//         price1: "$40.00",
//         tag:"New",
//         price2: "$60.00"
//     },
//     {
//         image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
//         description:"Green Dress with Details",
//         price1: "$40.00",
        
//         price2: "$60.00"
//     },
//     {
//         image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png",
//         description:"Green Dress with Details",
//         tag:"New",
//         price1: "$40.00",
//         price2: "$60.00"
//     },
//     {
//         image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product6.png",
//         description:"Green Dress with Details",
//         price1: "$40.00",
//         price2: "$60.00"
//     },
//     {
//         image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product5.png",
//         description:"Green Dress with Details",
//         price1: "$40.00",
//         price2: "$60.00"
//     },
//     {
//         image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product3.png",
//         description:"Green Dress with Details",
//         tag:"New",
//         price1: "$40.00",
//         price2: "$60.00"
//     }
//   ]

console.log(    addCart
)

  return (
    <div className='home-product-items-container'>
        {allItems.map((item, index) => (
            <div className='home-product-items' key={index}>
                <span>{item.tag}</span>
                <img src={item.image} alt="" />
                <p>{item.description}</p>
                <div className='home-product-items-stars'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
                <div className='home-product-items-price'>
                    <span>{item.price1}</span>
                    <span>{item.price2}</span>
                </div>
                <button onClick={()=>addToCart(item)}>Add to cart</button>
            </div>
        ))}
    </div>
  )
}

export default All