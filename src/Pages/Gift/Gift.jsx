import React, { useEffect, useState } from 'react'
import './Gift.css'
import { assets } from '../../assets/assets';
import Calendar from '../../components/Calendar/Calendar';

const Gift = () => {

    const [choose, setChoose] = useState(null);
    const MarkImage = <img src={assets.love} alt="Mark" className="mark" />;

    const handleChoice = (choice) => {
        setChoose(choose === choice ? null : choice);
    }

    console.log(choose)

  return (
    <div className='reward'>
        <p>Choose what do you like</p>
        <div className="list-reward">
            <div className="item dinner" onClick={() => handleChoice('Dinner')}> 
                {choose === 'Dinner' && MarkImage} 
                Dinner
            </div>
            <div className="item aquarium" onClick={() => handleChoice('Aquarium')}> 
                {choose === 'Aquarium' && MarkImage} 
                Aquarium
            </div>
            <div className="item movie" onClick={() => handleChoice('Movie')}> 
                {choose === 'Movie' && MarkImage} 
                Movie 
            </div>
        </div>
        <div className="when">
            <Calendar choose={choose}/>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default Gift