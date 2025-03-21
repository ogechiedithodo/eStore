import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const url = "https://colorlib.onrender.com/api/v1";


const Login = () => {
  
  

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userEmail, setUserEmail] = useState({ email: "" });
  const [loading, setLoading] = useState(false)
  console.log(userEmail);

  const [logInData, setLogInData] = useState({
    userName: "",
    password: "",
  });
  console.log(logInData);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setLogInData({ ...logInData, [name]: value });
    setIsDisabled(!(logInData.userName && logInData.password));
  };

  const handleSubmit = () => {
    setOpenModal(false);
    getUserEmail();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserEmail({ ...userEmail, [name]: value });
  };
  const emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
  };

  const getUserEmail = async () => {
    if (userEmail.email === "") {
      toast.error("This field can't be empty");
    } else if (!emailValidation(userEmail.email)) {
      toast.error("Invalid Email Format");
    } else {
      try {
        const res = await axios.post(`${url}/forgot/password`, userEmail);
        console.log(res);
        toast.success("Link has been sent to email address");
      } catch (error) {
        console.log(error);
        toast.error("Enter a valid email");
      }
    }
  };
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);
  const postLogInData = async () => {
    setLoading(true)
    if (logInData.userName === "") {
      toast.error("Username can't be empty");
    } else if (logInData.password === "") {
      toast.error(" Password Field can't be empty!");
    } else if (!validatePassword(logInData.password)) {
      toast.error("Password must contain numbers and special characters");
    } else {
      try {
        setLoading(true)
        const res = await axios.post(`${url}/login`, logInData);
        console.log(res);
        setLoading(false)
        toast.success(res.data.message);
        setLoading(false)
        navigate("/");

        localStorage.setItem(
          "userLoginToken",
          JSON.stringify({ userToken: res.data.token })
        );
        console.log(res.data.token);
      } catch (error) {
        setLoading(false)
        console.log(error);
        toast.error(error.res.data.message);
      }
    }
  };

  return (
    <div className="loginBody">
      <Header />
      <ToastContainer />
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
                  name="userName"
                  onChange={handleInputChange}
                  value={logInData.userName}
                  type="text"
                  placeholder="Username"
                />
              </div>
              {errorMessage}
              <div className="input-area">
                <input
                  name="password"
                  onChange={handleInputChange}
                  value={logInData.password}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="check">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <div
                className="login-btn"
                onClick={postLogInData}
                disable={isDisabled}
                style={{ background: !isDisabled ? "#8b8b8b" : "#2577fe" }}
              >
              {
                loading ?  
                <span>Loading...</span>:
                <span>LOG IN</span>
              }
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
        <div className="modal" onClick={() => setOpenModal(false)}>
          <div className="modal-content">
            <span className="close">X</span>
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
