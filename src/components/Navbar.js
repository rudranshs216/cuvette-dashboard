import React from 'react'
import logo from "../assets/logo.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <div className="profile">
        <img src="https://yt3.ggpht.com/ytc/AKedOLRnP-ZVqmapcRJaQSHhww8JbqVxx8UeHiHkX0UkVA=s900-c-k-c0x00ffffff-no-rj" alt="" />
        <p>Rudransh Sharma</p>

      </div>
    </div>
  )
}

export default Navbar