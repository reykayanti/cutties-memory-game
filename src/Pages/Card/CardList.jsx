import React from 'react'
import { assets } from '../../assets/assets'

const CardList = ({nama}) => {
    
    return (
        <div className='card-list'>
            {nama.map((item, index)=>(
                <div key={index}>
                    <h3>{item}</h3>
                </div>
            ))}
        </div>
    );
}

export default CardList