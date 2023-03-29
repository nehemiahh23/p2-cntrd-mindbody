import React from 'react'
import { Line } from 'react-chartjs-2'

function LineGraph({ chartData }) {
  return (
    <div style={{height: "80vh", width: "80vw"}}>
        <Line
            data={{
                labels: chartData.map(status => status.date),
                datasets: [
                    {
                        data: chartData.map(status => status.mood)
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

export default LineGraph