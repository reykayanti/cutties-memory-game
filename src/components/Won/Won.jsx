import React from 'react'
import './Won.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Won = () => {
  return (
    <div className='win-notification'>
        <img className='gift' src={assets.gift} alt="" />
        <div className="win-popup">
            <p>You Win!!</p>
            <Link to='/gift'>
              <button className='claim'>Claim your gift</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Won