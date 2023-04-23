import React from 'react'
import long from "./img/lounge-banner.jpg"
import long1 from "./img/long1.webp"
import long2 from "./img/long2.jpeg"
import long3 from "./img/long3.jpeg"
import Header from './Header'
import Hotel from './Hotel'
import Hotel1 from './Hotel1'
import "./Lounge.css"
import Footer from './Footer'
function Lounge() {
  return (
    <div>
        <Header/>
        <div style={{ 
  backgroundImage: `url(${long})`,
  backgroundRepeat: 'repeat',
  height:'300px',
  width:"100vw",
}}>
</div>
<Hotel1/>
<div class="grid-container">
    <div>
        <img 
        className='long1'
        src={long1}/>
    </div>
    <div>
        <img 
        className='long1'
        src={long2}/>
    </div>
    <div>
        <img 
        className='long1'
        src={long3}/>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Lounge