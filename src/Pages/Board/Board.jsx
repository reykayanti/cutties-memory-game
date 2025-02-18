import React, { useEffect, useState } from 'react'
import './Board.css'
import { assets } from '../../assets/assets'
import Bubchat from '../../components/Bubchat/Bubchat';
import Won from '../../components/Won/Won';


const Board = () => {

    const images = [
        assets['green'], assets['purple'], assets['coklat'], assets['yellow'],
        assets['green'], assets['purple'], assets['coklat'], assets['yellow']
    ];

    const [cards, setCards] = useState([]);
    const [flippedIndexes, setFlippedIndexes] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [gameWon, setGameWon] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

     //komponen card
     const Card = ({ image, onClick, flipped, id }) => {
        return (
          <div className="card" onClick={() => onClick(id)}>
            {flipped ? (
              <img src={image} alt="card" className="card-img" />
            ) : (
              <div className="card-back">?</div>
            )}
          </div>
        );
      };

      useEffect(() => {
        const shuffledCards = [...images, ...images] // Menambahkan gambar dua kali untuk pasangan
          .map((image, index) => ({ id: index, image, flipped: false, matched: false }))
          .sort(() => Math.random() - 0.5); // Mengacak kartu
        setCards(shuffledCards);

        const timer = setTimeout(()=>{
          setShowPopup(true);
        }, 4000)

      }, []);

      //menang
      useEffect(() => {
        if (matchedCards.length === images.length) {
          setGameWon(true); // Jika jumlah pasangan yang cocok sama dengan total kartu, maka pemain menang
        }
      }, [matchedCards]);

      const handleCardClick = (index) => {
        if (flippedIndexes.length === 2 || cards[index].flipped || cards[index].matched) {
          return; // Tidak melakukan apa-apa jika sudah ada 2 kartu terbuka atau kartu sudah dicocokkan
        }
    
        const newCards = [...cards];
        newCards[index].flipped = true;
        setCards(newCards);
    
        // Menambahkan kartu yang terbuka
        setFlippedIndexes([...flippedIndexes, index]);
    
        // Mengecek apakah dua kartu terbuka memiliki gambar yang sama
        if (flippedIndexes.length === 1) {
          const [firstIndex] = flippedIndexes;
          if (newCards[firstIndex].image === newCards[index].image) {
            // Jika sama, tandai kartu sebagai matched
            newCards[firstIndex].matched = true;
            newCards[index].matched = true;
            setMatchedCards([...matchedCards, newCards[firstIndex].image]);
          } else {
            // Jika tidak sama, tutup kartu setelah beberapa detik
            setTimeout(() => {
              newCards[firstIndex].flipped = false;
              newCards[index].flipped = false;
              setCards([...newCards]);
            }, 400);
          }
          setFlippedIndexes([]);
        }
      };

  return (
    <div className='board'>

      {showPopup && 
        <Bubchat/>
      }

      {cards.map((card, index) => (
        <Card
          key={card.id}
          id={index}
          image={card.image}
          flipped={card.flipped}
          onClick={handleCardClick}
        />
      ))}

      {gameWon 
        && 
        <Won/>
      } 

    </div>
  )
}

export default Board