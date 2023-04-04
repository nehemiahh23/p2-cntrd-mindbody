import React from 'react'
import { Line } from 'react-chartjs-2'

function SleepGraph({ sleepData }) {
  return (
    <div style={{height: "45vh", width: "45vw"}}>
        <Line
            data={{
                labels: sleepData.map(status => status.date),
                datasets: [
                    {
                        data: sleepData.map(status => status.sleep)
                    }
                ]
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Your Sleep Graph"
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 16,
                        ticks: {
                        stepSize: 1
                    }
                    }
                    
                }
            }}
        />
    </div>
  )
}

export default SleepGraph