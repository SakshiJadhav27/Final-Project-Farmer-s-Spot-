import React from "react";
import "./wholesalerRegister.css";
import wholesaler1 from "../../../images/wholesale.png";
import { Link } from "react-router-dom";
const Register = () => {
    return(
       <div className="register-main">
        <div className="sideimage">
            <img src={wholesaler1} alt="side image"/>
        </div>
         <div className="wholesaler-register">
            <h1>Wholesaler Registration</h1>
          <form>
            <h4>First Name:</h4>
            <input type="text" id="firstName" name="firstName" />
            <h4>Last Name:</h4>
            <input type="text" id="lastName" name="lastName" />
            <h4>Email:</h4>
            <input type="text" id="email" name="email" />
            <h4>Password:</h4>
            <input type="text" id="password" name="password" />
            <button type="submit">Register</button>
            <Link to="/wholesalerLogin">Already have an account? Login here</Link>
          </form>  
         </div>
       </div>
    )
}
export default Register;