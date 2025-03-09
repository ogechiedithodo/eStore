import Header from "../components/Header";
import "../styles/login.css";
const Login = () => {
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
                <h2> New to our Shop?</h2>
                <br />
                <p>
                  {" "}
                  There are advances being made in science and
                  <br />
                  technology everyday, and a good example of this is
                  <br /> the{" "}
                </p>
              </div>
              <div className="button">
                <span> CREATE AN ACCOUNT</span>
              </div>
            </div>
          </div>
          <div className="login-card">
            <div className="card-header">
              <h1>Welcome Back !
                <br /> Please Sign in now</h1>
            </div>
            <div className="user-details">
                <div className="input-area">
                    <input type="text" placeholder="username" />
                </div>
                <div className="input-area">
                    <input type="text" placeholder="password" />
                    {/* <div className="vertical-line"></div> */}
                    
                </div>
                <div className="check">
                    <input type="checkbox" />
                    <p>Remember me</p>
                </div>
                <div className="login-btn">
                    <span>LOG IN</span>
                </div>
                <div className="forget-password">
                    <p>forgot password?</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
