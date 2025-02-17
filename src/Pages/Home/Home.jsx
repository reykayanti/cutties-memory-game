import React, { useState } from 'react'
import './Home.css'
import {Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

export const Home = () => {

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handlePopupClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            navigate('/board');
        }, 3000);
    }
    
  return (
    <>
        
        {!showPopup && 
            <>
            <div className='home-hello'>
                <img className='tree1' src={assets.tree} alt="" />
                <div className="title">
                    <div className="floating-texta ">Lets</div>
                    <div className="floating-textb ">play</div>
                    <div className="floating-texta ">for</div>
                    <div className="floating-textb ">your</div>
                    <div className="floating-texta ">gift</div>
                </div>
                <button className='startthegame' onClick={handlePopupClick}>
                    Start
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

