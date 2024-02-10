import React from "react";
import "./wholesalerLogin.css";
import wholesaler2 from "../../../images/wholesale.png";
import { Link,useNavigate } from "react-router-dom";
const WholesalerLogin = () =>{
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/wholesalerHome');
    };
    return(
        <div className="Login_main">
            <div className="side_image">
                <img src={wholesaler2} alt="side_image"/>
            </div>
            <div className="wholesaler-login">
            <h1>Wholesaler Login</h1>
          <form>
            <h4>Email:</h4>
            <input type="text" id="email" name="email" />
            <h4>Password:</h4>
            <input type="text" id="password" name="password" />
            <button type="submit" onClick={handleLogin}>Login</button>
            <Link to="/wholesalerRegister">Don't have an account? Register here</Link>
          </form>   
         </div>
        </div>
    )
}
export default WholesalerLogin;