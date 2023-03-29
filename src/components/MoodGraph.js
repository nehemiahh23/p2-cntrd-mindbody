import React from 'react'
import { Line } from 'react-chartjs-2'

function MoodGraph({ moodData }) {
  return (
    <div style={{height: "45vh", width: "45vw"}}>
        <Line
            data={{
                labels: moodData.map(status => status.date),
                datasets: [
                    {
                        data: moodData.map(status => status.mood)
                    }
                ]
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Your Mood Graph"
                    },
                    legend: {
                        display: false
                    }
                }
            }}
        />
    </div>
  )
}

export default MoodGraph