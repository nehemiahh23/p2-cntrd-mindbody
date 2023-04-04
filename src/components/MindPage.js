import React, {useState, useEffect} from 'react'
import MindCard from './MindCard'
import './MindPage.css'

function MindPage() {

  const [meditation, setMeditation] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/meditations')
    .then(res => res.json())
    .then(data => setMeditation(data))
  }, [])

  return (
      <div className="mind-page">
        {meditation.map(meditation => <MindCard key={meditation.id} meditation={meditation} />)}
      </div>
    )
}

export default MindPage

