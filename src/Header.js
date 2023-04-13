import React from "react";
import "./Header.css";
import img1 from "./img/073c94144fe5d18a508c9abd81498ace_resize.jpg"
import img2 from "./img/G20-logo.webp";
import img3 from "./img/azadi-moh.jpg"
import Dropdown from "./Dropdown";
function Header() {  
 

  return (
    <div className="header">
      {/* "https://www.vegamoontech.com/wp-content/uploads/2022/11/astrology-website-zodiac-chakra.png" */}
        <img
          className="header__logo"
          src={img1}/>


<img
          className="img2"
          src={img2}/>
          <img
          className="img3"
          src={img3}/>
            
       <div >
            <b><Dropdown/></b>
          </div>
          {/* <div className="header__option">
            <span className="header__optionLineOne"><b>About</b></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Pooja</b></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Rashifal</b></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Contact</b></span>
          </div> */}
          <div className="header__option">
            <span className="header__optionLineOne"><b>Login</b></span>
          </div> 
    </div>
  );
}

export default Header;