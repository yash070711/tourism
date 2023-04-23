import React from 'react'
import bus from "./img/Bus_Banner01.jpg"
import bus1 from "./img/Bus1.png"
import bus2 from "./img/Bus2.png"
import "./Bus.css"
import Header from './Header'
import Hotel1 from './Hotel1'
import Package from './Package'
function Bus() {
  return (
    <div>
        <Header/>

              <div style={{ 
  backgroundImage: `url(${bus})`,
  backgroundRepeat: 'repeat',
  height:'350px',
  width:"100vw",
}}
>

<marquee scrollamount="15" direction="right">
    
            <img 
            className='bus1'
            src={bus1}/>

        </marquee>
        {/* <marquee scrollamount="15" direction="right">
    
            <img 
            className='bu'
            src={bus2}/>
            
        </marquee> */}
    </div>
    <Hotel1/>
    <Package/>
    </div>
  )
}

export default Bus