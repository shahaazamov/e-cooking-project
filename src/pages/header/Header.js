import React from 'react'
import Subheading from '../subheading/Subheading'
import {FaPlay,FaAppStore} from 'react-icons/fa'
import rasta from '../../assets/rasta-img.jpg'

import './Header.css'

function Header() {
    return (
        <div className="app__header app__wrapper section__padding" id='home'>
        <div className="container inner-container">
        
        <div className="app__wrapper_info">
        <Subheading title="Delivery Service. Food, Grocery, Books, "/>
        <h1 className="app__header-h1">Rasta - restoran va kafelardan mahsulotlarni o‘z narxida mijozlarga sotadi</h1>
        <p className="o_opensans" style={{margin:'2rem 0 '}}>Qorningiz ochib, ishtaxangiz qochib ketishidan oldin yetkazamiz!
 Rastaning uchar kuryerlari bilan hammasi o'z vaqtida bo'ladi.
 Shubhangiz bo'lsa, ilovamiz orqali buyurtma berib duximizni sinab ko'ring!</p>
 <div className="button-section">
   <a href="https://play.google.com/store/apps/details?id=com.girgitton.user&hl=en&gl=US" target="_blank">  <button className='btn play' >download on<FaPlay className='play-icon'/></button></a>
    
    <a href="https://apps.apple.com/uz/app/rasta-girgitton/id1447948807" target="_blank"><button className='btn app-store' >download on<FaAppStore className='app-icon'/></button></a>
 </div>
        </div>
        <div className="app__wrapper_img">
            <img src={rasta} alt="" width={435} height={435}/>
        </div>
        </div> 
           </div>
        )
    }
    
    export default Header