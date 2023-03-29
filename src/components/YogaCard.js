import React from 'react'


function YogaCard({yoga}) {

  console.log("yoga", yoga)

  return (
  <div className="yoga-container">
      <div className="yoga-card">
        <div className="yoga-content">
          <h2>{yoga.title}</h2>
          <p>{yoga.image}</p>
          <h3>{yoga.purpose}</h3>
          <p>{yoga.guide}</p>
          <p>{yoga.video}</p>
          <p>{yoga.duration}</p>
      </div>
    </div>
  </div>
    )
}

export default YogaCard