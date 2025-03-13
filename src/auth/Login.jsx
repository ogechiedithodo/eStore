import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import axios from "axios";

const url = "https://colorlib.onrender.com/api/v1";

const Login = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [userEmail, setUserEmail] = useState({ email: "" });
  console.log(userEmail);

  const [logInData, setLogInData] = useState({
    userName: "",
    password: ""
   })
  //  console.log(logInData)
const handleInputChange = (e) => {
const {value, name} = e.target;
setLogInData({...logInData, [name]: value})
}

  const handleSubmit = () => {
    setOpenModal(false);
    // navigate("/resetpassword");
    getUserEmail()
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserEmail({ ...userEmail, [name]: value });
  };

  const getUserEmail = async()=> {
    try{
      const res = await axios.post(`${url}/forgot/password`,userEmail)
      console.log(res)
    }
    catch (error){
      console.log(error)
    }
  }
  const postLogInData = async()=> {
    try{
      const res = await axios.post(`${url}/login`, logInData)
      console.log(res)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className="loginBody">
      <Header />
      <div className="login-hero">
        <div className="login-img">
          <img src="/img.png" alt="" />
        </div>
        <div className="login-body">
          <div className="left-card">
            <div className="container">
              <div className="text-container">
                <h2>New to our Shop?</h2>
                <p>
                  There are advances being made in science and technology
                  everyday, and a good example of this is...
                </p>
              </div>
              <div className="button">
                <span onClick={() => navigate("/signup")}>
                  CREATE AN ACCOUNT
                </span>
              </div>
            </div>
          </div>
          <div className="login-card">
            <div className="card-header">
              <h1>
                Welcome Back!
                <br />
                Please Sign in now
              </h1>
            </div>
            <div className="user-details">
              <div className="input-area">
                <input 
                name = "userName"
                onChange={handleInputChange}
                value={logInData.username}
                type="text" 
                placeholder="Username" />
              </div>
              <div className="input-area">
                <input 
                name = "password"
                onChange={handleInputChange}
                value={logInData.password}
                type="text"
                 placeholder="Password" 
                 />
              </div>
              <div className="check">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <div className="login-btn" onClick={postLogInData}>
                <span>LOG IN</span>
              </div>
              <div
                className="forget-password"
                onClick={() => setOpenModal(true)}
              >
                <p>Forgot password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {openModal ? (
        <div className="modal" >
          <div className="modal-content" >
            <span className="close">
              &times;
            </span>
            <h2>Forgot Password</h2>
            <p>Enter your email to reset your password:</p>
            <input
              type="text"
              value={userEmail.email}
              onChange={handleChange}
              placeholder="Enter your email"
              name="email"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
