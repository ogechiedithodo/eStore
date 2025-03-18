import React, { useState } from "react";
import "../styles/resetpassword.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const url = "https://colorlib.onrender.com/api/v1";

const ResetPassword = () => {
  const [resetPassword, setResePassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const {token} = useParams()
  console.log(token)
  console.log(resetPassword);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setResePassword({ ...resetPassword, [name]: value });
  };
const validatePassword = (password) => {
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(password)

}

  const postResetPassword = async (myToken) => {
    if(resetPassword.newPassword && resetPassword.newPassword === ''){
           toast.error("Fields can't be empty")
    }
    else if(!validatePassword(resetPassword)){
      toast.error("Password must contain numbers and special characters")

    }
    else{
      try {
        const res = await axios.post(
          `${url}/reset/password/${myToken}`,
          resetPassword
        );
        console.log(res.response.data.message);
        toast.success(res.response.data.message)
      } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message)
      }
    }
  };

  return (
    <div className="modal">
      <ToastContainer/>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Reset Password</h2>
        <p>Enter your new password below:</p>
        <input
          type="text"
          value={resetPassword.newPassword}
          onChange={handleChange}
          placeholder="New Password"
          name="newPassword"
        />
        <input
          type="password"
          value={resetPassword.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        <button onClick={()=>postResetPassword(token)}>Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPassword;
