import React from 'react'
import './Card.css'
import CardList from './CardList'
import { assets } from '../../assets/assets'

const Card = () => {

    const name = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D", "A", "B", "C", "D"]

    const suffleName = name.sort(()=> Math.random() - 0.5)
    
  return (
    <div className='card-game'>
        <CardList nama={suffleName}/>
    </div>
  )

}

export default Card