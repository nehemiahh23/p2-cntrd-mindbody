import React from 'react';

function Audio({ meditation }) {
    
  return (
    <div>
      <audio controls>
        <source src={meditation.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>{meditation.duration}</p>
    </div>
  );
}

export default Audio;