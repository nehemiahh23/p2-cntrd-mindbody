import React from 'react'
import { Parallax } from "react-parallax";
import Meditation from '../images/mind.jpg'

function Mind() {

  return (
      <Parallax className='mind-image' bgImage={Meditation} strength={400}>
    
      </Parallax>
    )
}

export default Mind