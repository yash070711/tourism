import React from 'react'
import Header from './Header'
import f1 from "./img/clubmahindraBanner3.jpg"
import Icons from './Icons'
import Contact from './Contact'
import Footer from './Footer'
function Flight() {
  return (
    <div>
        <Header/>
        <div style={{ 
  backgroundImage: `url(${f1})`,
  backgroundRepeat: 'repeat',
  height:'500px',
  width:"100%",
  
}}>
    </div>
    <Icons/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Flight