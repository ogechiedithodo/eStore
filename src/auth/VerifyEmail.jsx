import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const VerifyEmail = () => {

  const {tokens} = useParams()
  const navigate = useNavigate()
   
  console.log(tokens)

  const url = 'https://colorlib.onrender.com/api/v1/verify/user/'
  
  const handleVerify = async () =>{
      try {
        const res =  await axios.get(`${url}${tokens}`)
        console.log(res)
        toast.success('verified successfully')
        setTimeout(() => navigate('/login'), 3000);
      } catch (error) {
        console.log(error)
        toast
      }
  }


  return (
    
    <div>
      <ToastContainer/>,
      <button onClick={handleVerify}>Verify Email</button>
    </div>
  )
}

export default VerifyEmail
