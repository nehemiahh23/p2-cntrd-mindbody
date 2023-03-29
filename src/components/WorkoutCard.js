import React from 'react'

function WorkoutCard({workouts}) {

return (
    <div className="workout-container">
        <div className="workout-card">
            <div className="workout-content">
                <h2>{workouts.title}</h2>
                <p>{workouts.image}</p>
                <h3>{workouts.purpose}</h3>
                <p>{workouts.guide}</p>
                <p>{workouts.video}</p>
                <p>{workouts.duration}</p>
            </div>
        </div>
    </div>
    )

}

export default WorkoutCard