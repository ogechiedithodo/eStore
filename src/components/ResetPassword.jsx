import React, { useState } from "react";
import "../styles/resetpassword.css";
import axios from "axios";

const url = "https://colorlib.onrender.com/api/v1";

const ResetPassword = () => {
  const [resetPassword, setResePassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  console.log(resetPassword);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setResePassword({ ...resetPassword, [name]: value });
  };

  const postResetPassword = async () => {
    try {
      const res = await axios.post(
        `${url}/reset/password/:token`,
        resetPassword
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="modal">
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
        <button onClick={postResetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPassword;
