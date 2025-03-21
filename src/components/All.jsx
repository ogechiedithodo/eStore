import React from 'react'
import { CiStar } from "react-icons/ci";
import '../styles/All.css'
import { usePost } from '../global/Context';

const All = () => {

const {allProduct,addToCart} = usePost()


  return (
    <div className='home-product-items-container'>
        {allProduct?.map((item, index) => (
            <div className='home-product-items' key={index}>
                <img src={item.image.imageUrl} alt="" />
                <span>{item.description}</span>
                <p>{item.productName}</p>
                <div className='home-product-items-stars'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </div>
                <div className='home-product-items-price'>
                    <span>${item.productPrice}</span>
                    <span>{}</span>
                </div>
                <button onClick={()=>addToCart(item)}>Add to Cart</button>
                {/* console.log(addToCart);
                console.log(addCart); */}
                
            </div>
        ))}
    </div>
  )
}

export default All
