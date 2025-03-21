import React from 'react'
import { CiStar } from "react-icons/ci";
import '../styles/All.css'
import { usePost } from '../global/Context';

const All = () => {

const {allItems} = usePost()

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
            </div>
        ))}
    </div>
  )
}

export default All
