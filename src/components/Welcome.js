import React from 'react'
import Meditation from '../images/mind.jpg'
import { Parallax } from "react-parallax";


//Sign-In Form Component That Tracks your Name and Brings you to the next page which is the Self-Check In 

function Welcome() {
  return (
      <Parallax className='mind-image' bgImage={Meditation} strength={400}>
      </Parallax>
    )
}


export default Welcome