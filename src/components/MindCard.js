import React, { useState } from 'react';
import Audio from './Audio';

function MindCard({ meditation }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
      setIsFlipped(!isFlipped);
  };
  

  return (
    <div id="mind-card-container" className={isFlipped ? 'card-flipped' : 'card'}>
      {
        isFlipped 
        ?
        (
        <div className="card-face card-back">
          <Audio meditation={meditation} />
          <p>{meditation.duration}</p>
          <button onClick={flipCard}>Flip</button>
        </div>
      
        )
      :
          (
      <div className="card-face card-front">
        <div>
          <h2>{meditation.title}</h2>
          <p>{meditation.image}</p>
          <h3>{meditation.purpose}</h3>
          <button onClick={flipCard}>Flip</button>
        </div>
      </div>
          )
      }
    </div>
  );
}

export default MindCard;
