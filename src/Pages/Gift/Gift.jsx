import React, { useEffect, useState } from 'react'
import './Gift.css'
import { assets } from '../../assets/assets';

const Gift = () => {

    const [choose, setChoose] = useState(null);

    const handleChoice = (choice) => {
        setChoose(choose === choice ? null : choice);
    }

    console.log(choose)

    const renderCheckMark = (item) => {
        return choose === item ? 'mark' : ''; // condition ? valueIfTrue : valueIfFalse
    };

  return (
    <div className='reward'>
        <p>Choose what you like</p>
        <div className="list-reward">
            <div className="item dinner" onClick={() => handleChoice('Dinner')}> 
                {choose === 'Dinner' && <img src={assets.love} alt="Mark" className="mark" />} 
                Dinner
            </div>
            <div className="item aquarium" onClick={() => handleChoice('Aquarium')}> 
                {choose === 'Aquarium' && <img src={assets.love} alt="Mark" className="mark" />} 
                Aquarium
            </div>
            <div className="item movie" onClick={() => handleChoice('Movie')}> 
                {choose === 'Movie' && <img src={assets.love} alt="Mark" className="mark" />} 
                Movie 
            </div>
        </div>
    </div>
  )
}

export default Gift