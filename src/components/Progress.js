import React, { useEffect, useState } from 'react'
import { Parallax } from "react-parallax";
import Chart from "chart.js/auto"
import ProgressPic from '../images/progress.jpg'
import LineGraph from './LineGraph.js';

//Fake Dashboard for now


function ProgressPage({ submit }) {
    
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/statuses')
        .then(r => r.json())
        .then(data => setChartData(data.map(status => ({date: status.date, mood: status.mood}))))
    }, [submit])

    return (
        <Parallax className='progress-image' bgImage={ProgressPic} strength={400}>
            <LineGraph chartData={chartData} />
        </Parallax>
    )
}

export default ProgressPage