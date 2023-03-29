import React, {useState, useEffect} from 'react'
import Meditation from '../images/mind.jpg'
import MindCard from './MindCard'
import { Parallax } from "react-parallax";

function MindPage() {

  const [meditation, setMeditation] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/meditations')
    .then(res => res.json())
    .then(data => setMeditation(data))
  }, [])

  return (
    <Parallax className='progress-image' bgImage={Meditation} strength={400}>
      <div>
        {meditation.map (meditation => <MindCard key={meditation.id} meditation={meditation} />)}
      </div>
      </Parallax>
    )
}

export default MindPage