import React, { useEffect, useState } from 'react'
import './Home.css'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

export const Home = () => {

    const location = useLocation();

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const { dateTime, whereWeGo } = location.state || {}; 

    const handlePopupClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            navigate('/board');
        }, 3000);
    }


    
    console.log(dateTime, whereWeGo)


  return (
    <>
        
        {!showPopup && 
            <>
            <div className='home-hello'>
                <img className='tree1' src={assets.tree} alt="" />
                <div className={dateTime ? 'hidden' : 'title'}  >
                    <div className="floating-texta ">Lets</div>
                    <div className="floating-textb ">play</div>
                    <div className="floating-texta ">for</div>
                    <div className="floating-textb ">your</div>
                    <div className="floating-texta ">gift</div>
                </div>
                <div className={dateTime ? '' : 'hidden'}  >
                    <div className="floating-texta ">We will go to {whereWeGo}</div>
                    <div className="floating-texta ">The date and time is</div>
                    <div className="floating-textb ">{dateTime}</div>
                    <div className="floating-textc ">See you later</div>
                </div>
                <button className='startthegame' onClick={handlePopupClick}>
                    {dateTime ? 'Play Again' : 'Start'}
                </button>
            </div>
            </>
        }


        {showPopup && 
            <div className='popup'>
                <div className='popup-direct'></div>
                <p className='wait'>don't forget the card are you opened...</p>
            </div>
        }

    </>
    
  )
}

