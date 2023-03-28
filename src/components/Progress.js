import React from 'react'
import { Parallax } from "react-parallax";
import ProgressPic from '../images/progress.jpg'

//Fake Dashboard for now


function Progress() {
    return (
        <Parallax className='progress-image' bgImage={ProgressPic} strength={400}>

        </Parallax>
    )
}

export default Progress