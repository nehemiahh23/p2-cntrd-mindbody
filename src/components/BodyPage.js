import React, {useState, useEffect} from 'react'
import { Parallax } from "react-parallax";
import Fitness from '../images/body.jpg'
import YogaCard from './YogaCard'
import WorkoutCard from './WorkoutCard'

function BodyPage() {

const [yoga, setYoga] = useState([])
const [workouts, setWorkouts] = useState([])

useEffect(() => {
  fetch('http://localhost:3002/yoga')
  .then(res => res.json())
  .then(data => setYoga(data))
}, [])

useEffect(() => {
  fetch('http://localhost:3002/workouts')
  .then(res => res.json())
  .then(data => setWorkouts(data))
}, [])

  return (
    <Parallax className='body-image' bgImage={Fitness} strength={400}>
      {yoga.map (yoga => <YogaCard key={yoga.id} yoga={yoga} />)}
      {workouts.map (workouts => <WorkoutCard key={workouts.id} workouts={workouts} />)}
    </Parallax>
  )
}

export default BodyPage