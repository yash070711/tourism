import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Log from "./Component/Log";
import Signup from "./Component/Signup";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Component/firebase";
import Login from "./Component/Login";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
function App() {
  return (
    <div >
    <BrowserRouter>

<Routes>




<Route path="/" element={<Dashboard/>} />
 <Route path="/signup" element={<Signup/>}/> 
 <Route path="/log" element={<Log/>}/> 
 <Route path="/login" element={<Login/>}/> 
 {/* <Route path="/Abou" element={<Abou/>} />
<Route path="/Pooja" element={<Pooja/>} />
<Route path="/Rashifal1" element={<Rashifal1 />} />
<Route path="/Contact" element={<Contact1 />} />
<Route path="/Login" element={<Login/>} />
<Route path="/Collaboration" element={<Collaboration />} />
<Route path="/Sport" element={<Sport />} />
<Route path="/Camp" element={<Camp />} />
<Route path="/Checkout" element={<Checkout />} /> */} 








</Routes>

</BrowserRouter> 
</div>
  );
}

export default App;
