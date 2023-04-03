import React, {useState, useEffect} from 'react'
import WorkoutCard from './WorkoutCard'
import './WorkoutPage.css'
import './WorkoutCard.css'

function WorkoutPage() {

const [workouts, setWorkouts] = useState([])

useEffect(() => {
  fetch('http://localhost:3002/workouts')
  .then(res => res.json())
  .then(data => setWorkouts(data))
}, [])

  return (
    <div className="workout-page">
    <div className='workout-card-container'>
      {workouts.map (workouts => <WorkoutCard key={workouts.id} workouts={workouts} />)}
    </div>
    </div>
  )
}

export default WorkoutPage


