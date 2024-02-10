import React from "react";
import "./farmerLogin.css";
import Farmer1 from "../../../images/farmer.jpg";
import { Link,useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import { RegisterSchema } from '../../Schemas';

const initialValues = {
  email:"",
  password:""
}

const FarmerLogin = () => {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema:RegisterSchema,
    onSubmit:(values,action)=>{
      console.log(
        "🚀 ~ file: FarmerRegistration.jsx ~ line 14 ~ FarmerRegistration ~ values",
        values
      );
      action.resetForm();
    },
  });
  console.log(
    "🚀 ~ file: FarmerRegistration.jsx ~ line 26 ~ FarmerRegistration ~ errors",
    errors
  );


    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/farmerHome');
    };
  return (
    <div className="login-container">
      <div className="side-image">
        <img src={Farmer1} alt="Side Image" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email"
          autoComplete="off"
          placeholder="Email" 
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>):null}

          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          id="password" 
          name="password"
          autoComplete="off"
          placeholder="Password" 
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>):null}

          <button type="submit" onClick={handleLogin}>Login</button>
          <Link to="/farmerRegister">Don't have an account? Register here</Link>
        </form>
      </div>
    </div>
  );
};

export default FarmerLogin;
