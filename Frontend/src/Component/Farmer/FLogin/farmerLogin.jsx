import React from "react";
import "./farmerLogin.css";
import wholesaler2 from "../../../images/farmer.jpg";
import { Link,useNavigate} from "react-router-dom";
const FarmerLogin = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/farmerHome');
    };
  return (
    <div className="login-container">
      <div className="side-image">
        {/* Add your side image here */}
        <img src={wholesaler2} alt="Side Image" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          {/* Add your login form fields here */}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit" onClick={handleLogin}>Login</button>
          <Link to="/farmerRegister">Don't have an account? Register here</Link>
        </form>
      </div>
    </div>
  );
};

export default FarmerLogin;
