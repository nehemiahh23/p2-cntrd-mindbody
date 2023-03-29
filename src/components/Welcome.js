import React from 'react'
import WelcomeImg from '../images/welcome.jpg'
import { Parallax } from "react-parallax";


//Sign-In Form Component That Tracks your Name and Brings you to the next page which is the Self-Check In 

function Welcome({ user }) {
  return (
      <Parallax className='mind-image' bgImage={WelcomeImg} strength={400}>
        {
          user ? <h1>Welcome {user.name}</h1> : <h1>Welcome</h1>
        }
      </Parallax>
    )
}


export default Welcome