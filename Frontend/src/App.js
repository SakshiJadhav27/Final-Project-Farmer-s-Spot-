import React from 'react';
import './App.css';
import Home from './Component/Home/home';
import Navbar from './Component/Navbar/navbar'; 
//import About from './Component/Footer/about';
import { Router } from './Component/Router';

function app(){
  return(
    <div>
      <Navbar/>
      <Router/>
    </div>

)

}
export default app;

