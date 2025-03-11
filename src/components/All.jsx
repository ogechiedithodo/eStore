import React from 'react'
import '../styles/All.css'

const All = () => {

  const allItems =[
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        tag:"New",
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
        description:"Green Dress with Details",
        tag:"New",
        price1: "$40.00",
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
        description:"Green Dress with Details",
        price1: "$40.00",
        price2: "$60.00"
    },
    {
        image: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
        description:"Green Dress with Details",
        tag:"New",
        price1: "$40.00",
        price2: "$60.00"
    }
  ]

  return (
    <div className='home-product-items-container'>
        {allItems.map((item, index) => (
            <div className='home-product-items' key={index}>
                <span>{item.tag}</span>
                <img src={item.image} alt="" />
                <p>{item.description}</p>
                <div>
                    <span>{item.price1}</span>
                    <span>{item.price2}</span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default All
