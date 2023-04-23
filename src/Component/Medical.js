import React from 'react'
import m0 from "./img/Medical_toursim_banner.jpg"
import m1 from "./img/m1.png"
import m2 from "./img/m2.png"
import m3 from "./img/m3.png"
import m4 from "./img/m4.png"
import m5 from "./img/m5.png"
import m6 from "./img/m6.png"
import m7 from "./img/m7.png"
import m8 from "./img/m8.png"
import m9 from "./img/m9.png"
import m10 from "./img/m10.png"
import m11 from "./img/m11.png"
import m12 from "./img/m12.png"
import "./Medical.css"
import Header from './Header'
import Footer from './Footer'
function Medical() {
  return (
    <div>
            <Header/>
            <div>
            <img 
            className='m0'
            src={m0}/>
        </div>
<h1><center>OUR POPULAR MEDICAL PACKAGES</center></h1>
          <div class="grid-container">
            <div>
                <img 
                className='m1'
                src={m1}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m2}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m3}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m4}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m5}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m6}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m7}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m8}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m9}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m10}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m11}/>
            </div>
            <div>
                <img 
                className='m1'
                src={m12}/>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Medical