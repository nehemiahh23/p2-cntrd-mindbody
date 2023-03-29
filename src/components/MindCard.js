import React from 'react'

function MindCard({meditation}) {
  
return (
  <div className="mind-container">
    <div className="mind-card">
      <div className="mind-content">
        <h2>{meditation.title}</h2>
        <p>{meditation.image}</p>
        <h3>{meditation.purpose}</h3>
        <p>{meditation.guide}</p>
        <p>{meditation.audio}</p>
        <p>{meditation.duration}</p>
    </div>
  </div>
</div>
  )
}

export default MindCard