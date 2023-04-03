import React, { useState } from 'react';
import './WorkoutCard.css';


function WorkoutCard({ workouts }) {
  const [flipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!flipped);
  };

  const { title, purpose, duration, videoId } = workouts;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
      <div className={`workout-card ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
        <div className="workout-card__front">
          <div>
            <h2>{title}</h2>
            <h3>{purpose}</h3>
            <button className="workout-card__button__front"></button>
          </div>
        </div>
        <div className="workout-card__back" onClick={handleCardFlip}>
          <iframe
            src={videoUrl}
            title={title}
            width="280"
            height="158"
            frameBorder="0"
            allowFullScreen
          />
          <p className='duration'>{duration}</p>
          <button className="workout-card__button__back"></button>
        </div>
      </div>
  );
}

export default WorkoutCard;