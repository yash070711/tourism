import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import fb from "./img/facebook.png" 
import youtube from "./img/youtube.png"
import instagram from "./img/instagram.png"
import linkedin from "./img/linkedin.png"
import flogo1 from "./img/flogo1.png"
import flogo11 from "./img/flogo11.png"
import flogo2 from "./img/flogo2.png"
import flogo3 from "./img/flogo3.png"
function Footer() {
  return (
    <>
    <div className='footer'>
<div class="grid-container">
  <div>Services
    <ul>------<br/>
       <p className='h1' >Buses</p> 
       <p className='h1'>E-Catering </p>
       <p className='h1'>E-Ticketing </p>
       <p className='h1'>Flights</p>
       <p className='h1'>Hotels</p>
       <p className='h1'>Retiring Rooms</p>
       <p className='h1'>Travel Agents</p>
       <p className='h1'>Affiliate Registration</p>
    </ul>
  </div>
  <div>Domestic Holidays
  <ul>------<br/>
  <p className='h1'>Agra </p>  
  <p className='h1'>Bangalore</p>
  <p className='h1'>Chandigarh</p>
  <p className='h1'>Chennai</p>
  <p className='h1'>Kanyakumari</p>
  <p className='h1'>Ooty</p>
  <p className='h1'>Chardham</p>
  <p className='h1'>Ladakh</p>
    </ul>
  </div>
  <div>Pilgrimage Tours
  <ul>------<br/>
  <p className='h1'>Kevadia </p>
  <p className='h1'>Puri</p> 
  <p className='h1'>Rameswaram</p>

  <p className='h1'>Shirdi</p>
  <p className='h1'>Tirupati</p>
  <p className='h1'>Ujjain</p>
  <p className='h1'>Vaishno Devi</p>
  <p className='h1'>Varanasi</p>
    </ul>
</div>  
  <div>
    
About Us
<ul className='about'>------<br/>
<p className='h1'>Bharat Gaurav</p>
<p className='h1'>Travel Advisory</p>
<p className='h1'>Media Corner</p>
<p className='h1'>Gallery</p>
<p className='h1'>Sitemap</p>
<p className='h1'>Blog</p>
<p className='h1'>FAQ</p>
<p className='h1'>Privacy Policy</p> 
<p className='h1'>Terms & Conditions</p> 
<p className='h1'>Contact Us</p>
  </ul></div>
  </div>
    </div>
    <div class="grid-container">
  <div> <p className='t1'>© 2023 IRCTC | All Right Reserved.</p>
  <p className='t1'>Browser Support IE10 and IE11 and Chrome 5.0 and above Version</p></div>
  <div>
    <img 
    className='fb1'
    src={fb}/>
    <img 
    className='fb1'
    src={youtube}/>
    <img 
    className='fb1'
    src={instagram}/>
       <img 
    className='fb1'
    src={linkedin}/><br/>
<p className='t1'>  Get Connected with us on social networks</p></div>
  <div><img 
    className='fl1'
    src={flogo11}/>
    <img 
    className='fl2'
    src={flogo1}/>
    <img 
    className='fl2'
    src={flogo2}/>
       <img 
    className='fl2'
    src={flogo3}/></div>
  </div>
</>
  )
}

export default Footer