import React from 'react'
import '../styles/signup.css'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from 'axios'

const Signup = () => {

  const [input, setInput] = React.useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  console.log(input)
   
  const handleInputs = (e) =>{
     const {value, name} = e.target
     setInput({...input, [name]: value})
  }
   
  const url = 'https://colorlib.onrender.com/api/v1'
  
  const postDetails = async () =>{
    try{
      const res = await axios.post (`${url}/register`,input )
      console.log(res)
      toast.success(res.data.message)
    }
    
    catch (error){
         console.log(error)
          toast.error(error.response.data.message)
    }
  }

    const navigate = useNavigate();

  return (
    
    <div className='signup-container'>
        <Header />
        <ToastContainer />
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
                   <input
                    name='userName'
                    value={input.userName}
                    onChange={handleInputs}
                    type="text"
                    placeholder='Enter username'/>
                   <input
                    name='email'
                    value={input.email}
                    onChange={handleInputs}
                    type="email"
                    placeholder='Enter email'/>
                   <input
                    name='password'
                    type="password"
                    value={input.password}
                    onChange={handleInputs}
                    placeholder='Enter password'/>
                   <input
                    name='confirmPassword'
                    type="password"
                    value={input.confirmPassword}
                    onChange={handleInputs}
                    placeholder='Confirm password'/>
                </aside>
                <button onClick={postDetails}>Sign-Up</button>
              </div>
           </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Signup
