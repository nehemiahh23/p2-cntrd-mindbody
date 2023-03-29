import React, { useEffect, useState } from 'react'
import { Parallax } from "react-parallax";
import Chart from "chart.js/auto"
import ProgressPic from '../images/progress.jpg'
import MoodGraph from './MoodGraph.js';
import SleepGraph from './SleepGraph.js';
import MoodMessage from './MoodMessage';
import SleepMessage from './SleepMessage';

//Fake Dashboard for now


function Progress({ submit }) {
    
    const [moodData, setMoodData] = useState([])
    const [sleepData, setSleepData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/statuses')
        .then(r => r.json())
        .then(data => {
            setMoodData(data.map(status => ({date: status.date, mood: status.mood})))
            setSleepData(data.map(status => ({date: status.date, sleep: status.sleep})))
        })
    }, [submit])

    return (
        <Parallax className='progress-image' bgImage={ProgressPic} strength={400}>
            <div className='graph-container'>
                <MoodGraph moodData={moodData} />
                <MoodMessage />
                <SleepMessage />
                <SleepGraph sleepData={sleepData} />
            </div>
        </Parallax>
    )
}

export default Progress