import React from "react";
import logo from "./img/2c6bd7e2c3a2024e225ff760118b20d4.jpg";
import azadi from "./img/azadi-moh.jpg";
import G20 from "./img/G20-logo.webp";
import logo2 from './img/G20-logo.webp'

import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
      <div className="mainLogo">
        <img className="logo1" src={logo} alt="logo" />
      </div>
      <div className="subLogo">
       
       <div> <img className="logo2" src={azadi} alt="logo" /> </div>
        <div><img className="logo3" src={G20} alt="g20" /></div>
     
        
         <div className="navItems">
            <ul className="list">
            <li>Contact Us</li>
            <li>Login</li>
            <li>side</li>
            </ul>
            <img className="logo4" src={logo2} alt="logo2" />
        </div>
      </div>
    </div>
    <div className="backImg">
    <div className="plane"></div>
        <div className="train"></div>
        <div className="bus"></div>
    </div>

    <div className="seaContainer">
        {/* <img className="sea" src={sea} alt="sea" /> */}
        <div className="cruise"></div>
    </div>
    </>
  );
}

export default Header;
