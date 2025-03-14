import React, { useState } from 'react'
import '../styles/checkout.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Checkout = () => {
    const [showCheckOutMoadl, setShowCheckOutMoadl] = useState(false)
    const [showCheckOutMoadl2, setShowCheckOutMoadl2] = useState(false)

    const handleShowModalToggle = () => {
        setShowCheckOutMoadl((prev) => (!prev))
    }

    const handleShowModalToggle2 = () => {
        setShowCheckOutMoadl2((prev) => (!prev))
    }

    return (
        <div className='checkOutMain'>
            <Header />
            <div className='checkOutHero'>
                <h1>CheckOut</h1>
            </div>
            <div className='checkOutReturnWrapper'>
                <div className='checkOutReturn'>
                    <div className='checkOutLoginForm'>
                        <div className='returnText'><p>Returning Customer?</p><small style={{ color: 'blue' }}>Click here to login</small></div>
                        <p>If you have shopped with us before, please enter your details
                            in the boxes below. If you are a new customer, please proceed to
                            the Billing & Shipping section.</p>
                        <div className='checkOutLoginInput'>
                            <input type="text" placeholder='UserName or Email' />
                            <input type="text" placeholder='password' />
                        </div>
                        <div className='checkOutLoginInputBtm'>
                            <button className='checkOutBtn'>LOG IN</button>
                            <input type='checkbox' className='checkOutCheckBox' />
                            <p>remember me</p>
                        </div>
                        <p>Lost your password?</p>
                    </div>
                    <div className='checkOutCouponBtm'>
                        <div className='returnText'><p>Have a coupon?</p><small style={{ color: 'blue' }}>click here to  enter your code</small></div>
                        <input type="text" placeholder='Enter coupon code' className='checkOutCouponInput' />
                        <button className='checkOutApplyBtn'>Apply coupon</button>
                    </div>
                </div>
            </div>
            <div className='billingWrapper'>
                <div className='inputWrapper'>
                    <h3 style={{ color: '#415094' }}>billing Address</h3>
                    <div className='twinInput1'>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>
                    <input type="text" placeholder='company name' />
                    <div className='twinInput2'>
                        <input type="text" placeholder='phone Number' />
                        <input type="text" placeholder='Email Address' />
                    </div>
                    <div className='countryDropDown' onClick={handleShowModalToggle}>
                        <p>country</p>
                        {showCheckOutMoadl ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                    </div>
                    {showCheckOutMoadl ? <div className='optionModal'>
                        <span>country</span>
                        <span>country</span>
                        <span>country</span>
                    </div> : null}

                    <input type="text" placeholder=' Address line one' />
                    <input type="text" placeholder=' Address line two' />
                    <input type="text" placeholder='Town/city' />
                    <div className='countryDropDown' onClick={handleShowModalToggle2}>
                        <p>district</p>
                        {showCheckOutMoadl2 ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                    </div>
                    {showCheckOutMoadl2 ? <div className='optionModal2'>
                        <span>district</span>
                        <span>district</span>
                        <span>district</span>
                    </div> : null}
                    <input type="text" placeholder='PostCode/zip' />
                    <article className='checkOutCheckBoxWrapper'>
                        <nav>
                            <input type="checkbox" className='checkBoxInput' />
                            <p>Create an account?</p>
                        </nav>

                        <h3 style={{ color: '#415094' }}>Shipping Details</h3>

                        <nav>
                            <input type="checkbox" className='checkBoxInput' />
                            <p>Ship to a different address?</p>
                        </nav>

                        <textarea placeholder='order'></textarea>
                    </article>
                </div>
                <div className='checkOutReceipt'>
                    <div className='recieptHeader'>Your Order</div>
                    <article className='productTotal'>
                        <p>product</p>
                        <p>Total</p>
                    </article>
                    <article className='productFbbAmount'>
                        <p>Fresh Blackberry</p>
                        <p> x 02</p>
                        <p> $720.00</p>
                    </article>
                    <article className='productFbbAmount'>
                        <p>Fresh Tomatoes</p>
                        <p> x 02</p>
                        <p> $720.00</p>
                    </article>
                    <article className='productFbbAmount'>
                        <p>Fresh Brocoli</p>
                        <p> x 02</p>
                        <p> $720.00</p>
                    </article>
                    <article className='productTotal'>
                        <p>SUBTOTAL</p>
                        <p>$2160.00</p>
                    </article>
                    <article className='productTotal'>
                        <p>Shipping</p>
                        <p>flex rate $50.00</p>
                    </article>
                    <article className='productTotal'>
                        <p>TOTAL</p>
                        <p>$2210.00</p>
                    </article>
                    <section className='paypalSection'>
                        <span style={{ display: 'flex', gap: '5px', color: '#4150a1', fontSize: '12px' }}>
                            <input type="radio" /><p>CHHECK PAYMENTS</p></span>
                            <span className='payPalAd'>
                                <p>Please send a check to Store Name,<br/>
                                Store Street, Store Town, Store State/<br/>
                                County, Store Postcode.
                                </p>
                            </span>

                            <span style={{ display: 'flex', gap: '5px', color: '#4150a1', fontSize: '15px' }}>
                            <input type="radio" /><p>Paypal</p></span>
                            <span className='payPalAd'>
                                <p>Please send a check to Store Name,<br/>
                                Store Street, Store Town, Store State/<br/>
                                County, Store Postcode.
                                </p>
                            </span>
                            <span className='termsCondition'>
                                <input type="checkbox"/>
                                <p>I’ve read and accept the <small style={{fontSize:'15px',color:'#6fcaf7'}}>terms & <br/>Condition</small></p>
                            </span>
                    </section>
                    <button className='checkOutPayPalBtn'>
                        Proceed to paypal
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout
