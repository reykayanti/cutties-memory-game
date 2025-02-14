import React, { useEffect, useState } from 'react'
import './Card.css'
import { assets } from '../../assets/assets'

const Card = () => {

  const card = [
    { name : "A", image: "coklat"},
    { name : "B", image: "purple"},
    { name : "C", image: "green"}, 
    { name : "D", image: "yellow"},
  ]

  // Gandakan data 4 kali
  const duplicatedCard = [...card, ...card, ...card, ...card];

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledCards = duplicatedCard
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCards(shuffledCards);

  }, []); 

  const [flip, setFlip] = useState(new Array(duplicatedCard.length).fill(false));
  const [flippedIndices, setFlippedIndices] = useState([]); // Menyimpan indeks kartu yang dibalik
  const [match, setMatch] = useState([])

  const handleFlip = (index) => {

    if (cards[index].match){
      return;
    }

    const newCards = [...cards];
    newCards[index].flip = true;
    setCards(newCards);

    if (flippedIndices.length < 2 && !flip[index]){ // flip[index] yaitu menyimpan status flip = status false
      const newFlipState = [...flip];
      newFlipState[index] = !newFlipState[index]; // Membalik status flip kartu yang dipilih
      setFlip(newFlipState); // Memperbarui state flip

      cards[index].flip = true;
      setFlippedIndices([...flippedIndices, index]); //menambah index kartu yang dibalik

      const flippedCards = cards.filter(card => card.flip === true)

      if (flippedCards.length === 2){
        console.log('dua')
        if (flippedCards[0]?.image === flippedCards[1]?.image){ // matching
          cards[index].match = true;
          console.log("match")
        } else if (flippedCards[0]?.image != flippedCards[1]?.image) {
          console.log("noooooo mtach")
          setTimeout(() => {
            
          }, 400)
        }

      }

      
      

      
    
      console.log(cards)

    }
  
    

  };



  return (
    <div className='card-game'>
      <div className='card-list'>
        {cards.map((item, index) => (
          <div
            key={item.id}
            className={`card-front ${flip[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Card