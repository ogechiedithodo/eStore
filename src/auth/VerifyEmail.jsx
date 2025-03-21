import React from 'react'
import '../styles/verifyEmail.css'
import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
  const navigate = useNavigate()
  return (
    <div className='verifyEmailWrapper'>
    <div className='verifyEmail'>
  <p style={{fontSize:'20px', fontFamily:'sans-serif', }}>check email for verification link</p>
  <button onClick={()=>navigate('/login')}>Click to login  after verification</button>
   </div>
</div>
  )
}

export default VerifyEmail
