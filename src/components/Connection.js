import React from 'react'
import {Parallax} from "react-parallax";
import Community from '../images/connection.jpg'

//Social Media 

function Connection() {
  return (
  <Parallax className='connection-image' bgImage={Community} strength={400}>
  </Parallax>
  )
}

export default Connection