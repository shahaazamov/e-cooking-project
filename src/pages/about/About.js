import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import {FaTelegramPlane,FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'
// images
import girgittonbg from '../../assets/girgitton-bg.jpg'
import rastraapp from '../../assets/rasta-app.jpg'
import rastadelevery from '../../assets/rasta-delevery.jpg'
import bmw from '../../assets/bmw-rasta.jpg'
import rasta from '../../assets/rasta.png'
import footer from '../../assets/footer.png'

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination,Navigation } from "swiper";

// type effect
import { useTypewriter } from 'react-simple-typewriter'
import {Typewriter} from 'react-simple-typewriter'

// map
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function About() {
  return (
    <>
    <div className='aboutus-section'>
              <>
              <h2 className='type-effect'
        style={{ paddingTop: '25px',paddingBottom:'50px',  fontWeight: 'normal',textAlign:'center', }}
      >
        This is {' '}
        <span style={{ color: 'var(--big-text-color)', fontWeight: 'bold'}}>
          <Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['About us section!','About us section!','About us section!','About us section!']}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
      </h2>



      <Swiper  slidesPerView={1}
        spaceBetween={30}
        loop={true}
        onSetTransition={0.5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper" >
        <SwiperSlide >
          <img className='swiper-img' src={girgittonbg} alt="" width={1360} height='602'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src={rastraapp} alt="" width={1360} height='602'/>
        </SwiperSlide>
        <SwiperSlide> <img className='swiper-img' src={rastadelevery} alt="" width={1360} height='602'/>
        </SwiperSlide>
      </Swiper>
    </>
      <div className="container">
      <div className="aboutus-info">
  <div className="aboutus-text-wrapper">
    <div className="flexer">
    <h2 className="about-us-title">
        We reimagine the way the world moves for the better
        Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible speed of now.
        </h2>
    </div>
        <img className='about-img' src={bmw} alt="" width={500} height={500} />
  </div>
  <h3 style={{marginBottom:'50px'}}>Rasta is a convenient and fast food delivery service from restaurants. Order on the website or in the mobile application, pay by card or cash, and we will deliver your favorite food quickly right to your door.

Choosing the best restaurants, we cover all the dishes that you might like: juicy burgers or steaks, fragrant pizza or pasta, wok or rolls, porridge for breakfast or pilaf for lunch - Rasta brings together all the cuisines available in the city, so you can every time try something new.</h3>
      </div>
     <footer className="site-footer">
      
      <Link to="/" className="app_navbar-logo">
                <img className="app-navbar-logo-img" src={rasta} alt="" />
                <h3>Rasta</h3>
            </Link>
 <div className="container">
   
   <div className="bottom-navbar">
     <ul className="bottom-list">
       <li className="bottom-list-item">
         <Link className='navbar-link'
           to="/">Home</Link>
       </li>
       <li className="bottom-list-item">
         <Link className='navbar-link' to="/about">About</Link>
       </li>
       <li className="bottom-list-item">
         <Link className='navbar-link' to="/menu">Menu</Link>
       </li>
   
     </ul>
   </div>
   <div className="icons-social-medi">
     <Link className='icomn' to='https://twitter.com/rastashep'>
     <FaTwitter/>
     </Link>
     <Link className='icomn' to="https://t.me/s/Fikrbank">
     <FaTelegramPlane/>
     </Link>
     <Link className='icomn' to="https://www.instagram.com/hurshidbey/?hl=en">
     <FaInstagram/>
     </Link>
   </div>
 </div>

     </footer>
   
      </div></div>
  </>
  )
}

export default About