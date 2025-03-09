import React from 'react'
import '../styles/signup.css'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Signup = () => {
  
    const navigate = useNavigate();

  return (
    <div className='signup-container'>
        <Header />

       <div className='signup-form-card'>
              <h1>Sign-Up</h1>
       </div>
       <div className='sign-holder'>
           <div className='sign-up'>
              <div>
                <h3>Not New to Our shop?</h3>
                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                <p onClick={()=> navigate("/login")}>Sign-in</p>
              </div>
              <div>
                <h2>Welcome !<br />please Log in Now </h2>
                <aside>
                   <input type="text" placeholder='Enter username'/>
                   <input type="email" placeholder='Enter email'/>
                   <input type="password" placeholder='Enter password'/>
                   <input type="password" placeholder='Confirm password'/>
                </aside>
                <button>Sign-Up</button>
              </div>
           </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Signup