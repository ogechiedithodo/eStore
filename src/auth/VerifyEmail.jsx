import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const VerifyEmail = () => {

  const {tokens} = useParams()
   
  console.log(tokens)

  const url = 'https://colorlib.onrender.com/api/v1/verify/user/'
  
  const handleVerify = async () =>{
      try {
        const res =  await axios.get(`${url}${tokens}`)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
  }


  return (

    <div>
      <button onClick={handleVerify}>Verify Email</button>
    </div>
  )
}

export default VerifyEmail
