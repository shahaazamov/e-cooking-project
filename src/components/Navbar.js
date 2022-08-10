import React, {useState} from 'react'
import './Navbar.css'
import Home from '../pages/home/Home'
import {Link} from 'react-router-dom'
import images from '../assets/rasta.png'
// import {FaBars,FaTimes} from 'react-icons/fa'
import {FaBars,FaTimes} from 'react-icons/fa'


function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false)
 

    return (
      <nav className='app_navbar'>
        <div className="container inner-container">
            <Link to="/home" className="app_navbar-logo">
                <img className="app-navbar-logo-img" src={images} alt="" />
                <h3>Rasta</h3>
            </Link>
    <ul className='app_navbar__links'>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/">Home</a>
          </li>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/about">About</a>
          </li>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/blog">Menu</a>
          </li>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/contact">Contact</a>
          </li>
    </ul>
    <div className="app_navbar-login">
      <a href="#" className="p-opensans-links">Log In</a>
      </div>
      <div className="app__navbar-smallscreen">
    <FaBars color='#fff' fontSize={27} onClick={()=>{setToggleMenu(true)}}/>
{  toggleMenu && (
<div className='app-navbar-smallscreen_overlay flex__center slide-bottom'>
      <FaTimes className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>
    <ul className='app_navbar__smallScreen-links'>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/">Home</a>
          </li>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/about">About</a>
          </li>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/blog">Menu</a>
          </li>
        <li className="p_opensans">
          <a className='p-opensans-links' href="/contact">Contact</a>
          </li>
    </ul>
</div>
)} 

</div>
    </div>
    </nav>
  )
}

export default Navbar
