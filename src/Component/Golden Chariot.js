import React from 'react'
import ch from "./img/golden.jpg"
import ch1 from "./img/Home-bg2.webp"
import ch2 from "./img/Home-bg3.webp"
import Header from './Header'
import Footer from './Footer'
import "./Golden.css"
function Golden() {
  return (
    <div>
        <Header/>
            <div style={{ 
  backgroundImage: `url(${ch})`,
  backgroundRepeat: 'no-repeat',
  height:'1125px',
  width:"1800",
  
}}></div>
     <div style={{ 
  backgroundImage: `url(${ch1})`,
  backgroundRepeat: 'repeat',
  height:'900px',
  width:"1800",
  
}}>
    <div class="grid-container">
        <div className='g'><h1 className='g1'>PRIDE OF KARNATAKA</h1>
        <p className='g12'> Get onboard and experience the best of Karnataka on this 6 Nights/7 Days sojourn. 
         Immerse yourself in the rich cultural bounty in
             this southern state of india with evidence of civilization since pre-historic times.</p></div>
             <div className='g'><h1 className='g1'>GLIMPSES OF KARNATAKA</h1>
        <p className='g12'>"Our 3 Nights/4 Days "Glimpses of Karnataka" is your ticket to unravelling gems
         like Bandipur National Park, Mysore & Hampi on a journey replete with Glamour, Adventure & Countless Stories". </p></div>
    
    </div>
    
</div>
     <div style={{ 
  backgroundImage: `url(${ch2})`,
  backgroundRepeat: 'repeat',
  height:'1125px',
  width:"1800",
  
}}>
    <div class="grid-container">
        <div className='g'><h1 className='g1'>JEWELS OF SOUTH</h1>
        <p className='g121'>The city of Bengaluru, the capital of Karnataka, 
        is a splendid neo-metro that lets measures of modernity and age old culture mingle in equal parts.</p></div>
</div>
</div>
<Footer/>
    </div>
  )
}

export default Golden 