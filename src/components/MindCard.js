import React, { useState } from 'react';
import './MindCard.css';

function MindCard({ meditation }) {

  const [isFlipped, setIsFlipped] = useState(false);

  const { title, purpose, duration, videoId } = meditation;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div id="mind-card-container" className={isFlipped ? 'card-flipped' : 'card'}>
      {isFlipped ? (
        <div className="card-face card-back" onClick={flipCard}>
          <iframe
            src={videoUrl}
            title={title}
            width="280"
            height="158"
            allowFullScreen
          />
          <p>{duration}</p>
        </div>
      ) : (
        <div className="card-face card-front" onClick={flipCard}>
          <div>
            <h2>{title}</h2>
            <h3>{purpose}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default MindCard;
