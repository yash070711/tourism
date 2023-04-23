import React  from 'react'
import im1 from "./img/NE_360x233.webp"
import im2 from "./img/NRM_360x233.webp"
import im3 from "./img/N_360x233.webp"
import im4 from "./img/S_360x233.webp"
import im5 from "./img/W_360x233.webp"
import im6 from "./img/NE_360x233.webp"
import im7 from "./img/Tirupati_360x233.webp"
import im8 from "./img/Antra-River-Sutra.webp"
import { Link } from 'react-router-dom'
import "./Package.css"
function Package() {
  return (
    <div>
        <h1 className='h21'>Trending Packages</h1>
        <div class="grid-container">
            <div>
                <img 
                className='img1'
                src={im1}/>
            </div>
            <div>
            <img 
                className='img1'
                src={im2}/>
            </div>
            <div>
            <img 
                className='img1'
                src={im3}/>
            </div>
            <div>
            <img 
                className='img1'
                src={im4}/>
            </div>
            
            <div>  <img 
                className='img1'
                src={im5}/></div>
            <div>
            <img 
                className='img1'
                src={im6}/>
            </div>
            <div>
            <img 
                className='img1'
                src={im7}/>
            </div>
            <div>
            <img 
                className='img1'
                src={im8}/>
            </div>
        </div>
    </div>
  )
}

export default Package