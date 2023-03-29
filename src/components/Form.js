import React from 'react'
import Input from "./Input"
import Message from "./Message"
import { Parallax } from "react-parallax";
import Blue from "../images/blue.jpg"
import NavBar from "./NavBar"

function Form({ submit, setSubmit, activeDate }) {

  return (
    <Parallax className='progress-image' bgImage={Blue} strength={400}>
      <div id="form-page">
      <NavBar submit={submit} />
      <Input submit={submit} setSubmit={setSubmit} activeDate={activeDate} />
      <Message submit={submit} />
    </div>
        </Parallax>
  )
}

export default Form