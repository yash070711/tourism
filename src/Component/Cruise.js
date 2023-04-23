import React from 'react'
import Header from './Header'
import Hotel1 from './Hotel1'
import Contact from './Contact'
import Footer from './Footer'
import s1 from "./img/ship.jpg"
function Cruise() {
  return (
    <div>
        <Header/>
        <div style={{ 
  backgroundImage: `url(${s1})`,
  backgroundRepeat: 'repeat',
  height:'300px',
  width:"1800",
  
}}></div>
<Hotel1/>
<Contact/>
<Footer/>
    </div>
  )
}

export default Cruise