import React, { useState, useEffect } from 'react';
import './ConnectionCard.css';
import ConnectionCard from './ConnectionCard';
import './ConnectionPage.css';

function ConnectionPage() {
  const [affirmations, setAffirmations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/affirmations')
      .then((res) => res.json())
      .then((data) => setAffirmations(data));
  }, []);

  return (
    <div className="connection-page">
      <div className="connection-card-container">
        {affirmations.map((affirmation) => (
          <ConnectionCard key={affirmation.id} affirmation={affirmation} />
        ))}
      </div>
    </div>
  );
}

export default ConnectionPage;
