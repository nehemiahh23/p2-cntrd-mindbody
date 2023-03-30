import React, {useState, useEffect} from 'react'
import { Parallax } from "react-parallax";
import Fitness from '../images/body.jpg'
import WorkoutCard from './WorkoutCard'

function BodyPage() {

const [workouts, setWorkouts] = useState([])

useEffect(() => {
  fetch('http://localhost:3002/workouts')
  .then(res => res.json())
  .then(data => setWorkouts(data))
}, [])

  return (
    <Parallax className='body-image' bgImage={Fitness} strength={400}>
      {workouts.map (workouts => <WorkoutCard key={workouts.id} workouts={workouts} />)}
    </Parallax>
  )
}

export default BodyPage