import React from 'react'
import Header from './Header'
import Home from './Home'
import Icons from './Icons'
import Footer from './Footer'
import Contact from './Contact'
import Login from './Login'
import Signup from './Signup'
import Search from './Search'
import Package from './Package'
import Faq from './Faq'

function Dashboard() {
  return (
    <div>
        <Header/>
        <Home/>
        <Icons/>
        <Package/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Dashboard