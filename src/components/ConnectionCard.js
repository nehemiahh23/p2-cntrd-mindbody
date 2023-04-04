import React, { useState } from 'react';
import './ConnectionCard.css';

function ConnectionCard(props) {
  const [flipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`connection-card ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="connection-card__front">
        <h2 className="connection-card__title">{props.affirmation.title}</h2>
        <button className="connection-card__button__front"></button>
      </div>
      <div className="connection-card__back" onClick={handleCardFlip}>
        <p className="connection-card__affirmation">{props.affirmation.description}</p>
        <button className="connection-card__button__back"></button>
      </div>
    </div>
  );
}

export default ConnectionCard;
