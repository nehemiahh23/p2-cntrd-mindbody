import React, {useState} from 'react'
import { Parallax } from "react-parallax";
import Fitness from '../images/body.jpg'



function Body() {

  return (
    <Parallax className='body-image' bgImage={Fitness} strength={400}>

    </Parallax>
  )
}

export default Body