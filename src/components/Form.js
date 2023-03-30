import React from 'react'
import Input from "./Input"
import Message from "./Message"
import { Parallax } from "react-parallax";
import Blue from "../images/blue.jpg"

function Form({ submit, setSubmit, activeDate, setUser }) {

  return (
    <Parallax className='progress-image' bgImage={Blue} strength={400}>
      <div className='container'>
      <Input submit={submit} setSubmit={setSubmit} activeDate={activeDate} setUser={setUser} />
      <Message submit={submit} />
    </div>
        </Parallax>
  )
}

export default Form