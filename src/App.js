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
import Hotel from "./Component/Hotel";
import Bus from "./Component/Bus";
import Lounge from "./Component/Lounge";
import Golden from "./Component/Golden Chariot";
import Medical from "./Component/Medical";
import Cruise from "./Component/Cruise";
import Flight from "./Component/Flight";
function App() {
  return (
    <div >
    <BrowserRouter>

<Routes>




<Route path="/" element={<Dashboard/>} />
 <Route path="/signup" element={<Signup/>}/> 
 <Route path="/log" element={<Log/>}/> 
 <Route path="/login" element={<Login/>}/> 
  <Route path="/Hotel" element={<Hotel/>} />
 <Route path="/bus" element={<Bus/>} />
 <Route path="/lounge" element={<Lounge />} />
<Route path="/Golden" element={<Golden />} />
 <Route path="/Medical" element={<Medical/>} />
 <Route path="/Cruise" element={<Cruise />} />
 <Route path="/Flight" element={<Flight />} />
{/* <Route path="/Camp" element={<Camp />} />
<Route path="/Checkout" element={<Checkout />} />  */}








</Routes>

</BrowserRouter> 
</div>
  );
}

export default App;
