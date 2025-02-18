import React from 'react'
import './Won.css'
import { assets } from '../../assets/assets'

const Won = () => {
  return (
    <div className='win-notification'>
        <img className='gift' src={assets.gift} alt="" />
        <div className="win-popup">
            <p>You Win!!</p>
            <button className='claim'>Claim your gift</button>
        </div>
    </div>
  )
}

export default Won