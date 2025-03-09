import React from 'react'
import "../styles/shoppingcart.css"
import CartLandingPage from '../components/CartLandingPage'
import Footer from '../components/Footer'

const ShoppingCart = () => {
  return (
    <div className='mainShoppingCart'>
      <CartLandingPage />
      <Footer />
    </div>
  )
}

export default ShoppingCart