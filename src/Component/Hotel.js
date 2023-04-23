import React from 'react'
import "./Hotel.css"
import Header from './Header'
import Hotel1 from './Hotel1'
import h1 from "./img/newdelhi.jpg"
import h2 from "./img/digha.jpg"
import h3 from "./img/haridwar.jpg"
import h4 from "./img/indore.jpg"
import h5 from "./img/madurai.jpg"
import h6 from "./img/katra.jpg"
import h7 from "./img/raipur.jpg"
import Footer from './Footer'
import h0 from "./img/home-banner.jpg"
function Hotel() {
  return (
    <div>
        <Header/>
        <div style={{ 
  backgroundImage: `url(${h0})`,
  backgroundRepeat: 'repeat',
  height:'300px',
  width:"100vw",
}}>
     </div>
        <Hotel1/>
       
        <h1 className='n'>Hotels</h1>
         <div class="grid-container">
            <div>
                <img 
                className='h1'
                src={h1}/>

            </div>
            <div>
            <img 
                className='h1'
                src={h2}/>
            </div>
            <div>
            <img 
                className='h1'
                src={h3}/>
            </div>
            <div>
            <img 
                className='h1'
                src={h4}/>
            </div>
            <div>
            <img 
                className='h1'
                src={h5}/>
            </div>
            <div>
            <img 
                className='h1'
                src={h6}/>
            </div>
            <div>
             <img 
             className='h1'
             src={h7}/>
         </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Hotel