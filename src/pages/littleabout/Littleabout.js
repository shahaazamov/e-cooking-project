import React from 'react'
import G from '../../assets/G.png'
import spoon from '../../assets/Vector.svg'
import "./Littleabout.css"
import {Link} from 'react-router-dom'

function Littleabout() {
  return (
    <div className='about-us app__bg flex__center section__padding' id='about'>
        <div className="container">
            
        <div className="app__aboutus flex">
            <div className="app__aboutus-content-about">
                <h1 className='headtext-cormonant'>About Us</h1>
                <img className='spoon' src={spoon} alt="" width={20} height={20}/>
                <p className="p-opensans">
                Rasta is our national uzbek  food delivery platform that makes getting great food from your favorite local restaurants as easy as requesting a ride.

The Rasta connects you with a broad range of local restaurants and food, so you can order from the full menus of your local favorites whenever you want.

                </p>
    <Link to="/about" className='btn'>Read More</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Littleabout