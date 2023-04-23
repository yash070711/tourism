import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from"./img/2c6bd7e2c3a2024e225ff760118b20d4.jpg"
import logo1 from"./img/G20-logo.webp"
import logo2 from"./img/azadi-moh.jpg"
import logo3 from"./img/073c94144fe5d18a508c9abd81498ace_resize.jpg"

function Header() {  
 

  return (
    <div className="header">
      {/* "https://www.vegamoontech.com/wp-content/uploads/2022/11/astrology-website-zodiac-chakra.png" */}
      <Link to="/">
        <img
          className="header__logo"
          src={logo}/>
          </Link>
      <div className="header__option1">
            <span className="header__optionLineOne">
              <img 
              className="logo1"
              src={logo1}/>
            </span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">
            <img 
              className="logo2"
              src={logo2}/>
            </span>
          </div>
         
          <div className="header__option">
            <span className="header__optionLineOne1"><b>ContactUs</b></span>
          </div>
          <Link to="/log">
          <div className="header__option">
            <span className="header__optionLineOne"><b>Login</b></span>
          </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">
            <img 
              className="logo3"
              src={logo3}/>
            </span>
          </div>
    </div>
  );
}

export default Header;