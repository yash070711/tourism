import React from 'react'
import { MdFlight } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';
import {FaBusAlt} from 'react-icons/fa'
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import {FaHandHoldingMedical} from 'react-icons/fa'
import {GiBookmarklet} from 'react-icons/gi'
import {GiCruiser} from 'react-icons/gi'
import {BsTrainFreightFrontFill} from 'react-icons/bs'
import {GiIndianPalace} from 'react-icons/gi'
import {GiElephantHead} from 'react-icons/gi'
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link } from 'react-router-dom';
import "./Icons.css"
function Icons() {
  return (
    <div>
        <div className="Home-Form-Section">
        <div className="container home-form-container">
          <div className="card-p">
            <form action="">
              <div className="form-in-custom"></div>
              <div className="form-in-custom1"></div>
              <div className="form-in-custom2"></div>
            </form>
          </div>
        </div>
      
      <div className="container-fluid nav-icon-container">
          <ul className="nav-icons-wrap CenterIconBox">
            <Link to="/Flight" className='link'>
          <li><MdFlight  className="liItem"/><p>Flights</p></li>
          </Link>
          <Link to="/Hotel" className="link" >
            <li><FaHotel className="liItem"/><p>Hotels</p></li>
            </Link>
            <Link to="/bus" className="link" >
            <li><FaBusAlt className="liItem"/><p>Busses</p></li>
            </Link>
            <Link to="/lounge" className="link" >
            <li><MdAirlineSeatReclineExtra className="liItem"/><p>Lounge</p></li>
            </Link>
            <li><BsTrainFreightFrontFill className="liItem"/><p>Buddhist Train</p></li>
            <Link to="/Medical" className="link" >
            <li><FaHandHoldingMedical className="liItem"/><p>Medical Tourism</p></li>
            </Link>
            <li><GiBookmarklet className="liItem"/><p>TAG</p></li>
            <Link to="/Cruise" className="link" >
            <li><GiCruiser className="liItem"/><p>Cruisers</p></li>
            </Link>
            <li><GiIndianPalace className="liItem"/><p>Visit India</p></li>
            <Link to="/Golden" className="link" >
            <li><GiElephantHead className="liItem"/><p>Golden Chariot</p></li>
            </Link>
          </ul>
        </div>
        <div class="grid-container">
        <div className='input'>
          <input type='text' placeholder='Enter Origin/Destination City' className='text' /> 
            <select class="con1" name="sector">
              <option class="buttonsearch" value="Domestic">Domestic</option>
          <option class="buttonsearch" value="International">International</option></select>
          <button type='submit'  className='but'>Search <NearMeIcon className='ic'/></button>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Icons