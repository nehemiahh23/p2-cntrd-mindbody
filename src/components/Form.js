import React from 'react'
import { Parallax } from "react-parallax";
import Forms from "../images/welcome.jpg"


function Form() {
  return (
  
      <Parallax className='form-image' bgImage={Forms} strength={400}>
    
      </Parallax>
    )
}

export default Form