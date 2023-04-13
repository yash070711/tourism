import React from 'react'
import hm1 from "./img/tourism-view.webp"
import "./Home.css";
import im1 from "./img/htrain.webp"
import im2 from "./img/flight.webp"
import im3 from "./img/bus.webp"
import im4 from "./img/sea.webp"
import im5 from "./img/cruise.webp"
function Home() {
  return (
<div>
                 <div style={{ 
  backgroundImage: `url(${hm1})`,
  backgroundRepeat: 'repeat',
  height:'350px',
  width:"100vw",
  
}}>
  <marquee scrollamount="7" direction="right"> <img 
           className='flight'
           src={im2}/>  </marquee>
     <marquee  scrollamount="15" direction="right">
           <img 
           className='train'
           src={im1}/>
    </marquee>
    <marquee scrollamount="10" direction="left"> <img 
           className='bus'
           src={im3}/>  </marquee>
    
  
  </div>
               <div style={{ 
                backgroundImage: `url(${im4})`,
                backgroundRepeat: 'repeat',
                width:"100vw",
                
              }}>
  <marquee scrollamount="10" direction="right"> <img 
           className='ship'
           src={im5}/>  </marquee>    
{/* <div class="tourism-view "></div>
  <div class="flight "></div>
  <div class="train "></div>
  <div class="bus"></div>
  <div class="cruise"></div>
  </div> */}
    </div>
    </div>
  )
}

export default Home