// FarmerRegistration.js
import React from 'react';
import './farmerRegistration.css';
import farmer3 from "../../../images/farmer.jpg";
import { Link, useActionData } from 'react-router-dom';
import {useFormik} from "formik";
import { RegisterSchema } from '../../Schemas';

const initialValues = {
  fullName:"",
  Governid:"",
  email:"",
  password:"",
  confirm_password:""
}

const FarmerRegistration = () => {
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

  return (
    <div className="registration-container">
      <div className="side-image">
        <img src={farmer3} alt="Side Image" />
      </div>
      <div className="registration-form">
        <h2>Farmer Registration</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Full Name:</label>
          <input 
          type="text" 
          id="fullName"
          name="fullName"
          autoComplete='off'
          placeholder='Full Name'
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
         />
         {errors.fullName && touched.fullName ? (<p className="form-error">{errors.fullName}</p>):null}

          <label htmlFor="GovernId">Government Id:</label>
          <input 
          type="text" 
          id="Governid" 
          name="Governid"
          autoComplete="off"
          placeholder='Government Id'
          value={values.Governid}
          onChange={handleChange}
          onBlur={handleBlur} />
         {errors.Governid && touched.Governid ? (<p className="form-error">{errors.Governid}</p>):null}


          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          autoComplete='off'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>):null}


          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          autoComplete='off'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>):null}


          <label htmlFor="password">Confirm Password:</label>
          <input 
          type="password" 
          id="confrim_password" 
          name="confirm_password" 
          autoComplete='off'
          placeholder='Confirm Password'
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}/>
         {errors.confirm_password && touched.confirm_password ? (<p className="form-error">{errors.confirm_password}</p>):null}

          <button type="submit">Register</button>
          <Link to="/farmerLogin">Already have an account? Login here</Link>
        </form>
      </div>
    </div>
  );
};

export default FarmerRegistration;
