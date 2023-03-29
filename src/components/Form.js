import React from 'react'
import Input from "./Input"
import Sidebar from "./Sidebar"
import Message from "./Message"
import { Parallax } from "react-parallax";
import Blue from "../images/blue.jpg"

function Form({ submit, setSubmit }) {

  return (
    <Parallax className='progress-image' bgImage={Blue} strength={400}>
      <div id="form-page">
      <Input submit={submit} setSubmit={setSubmit} />
      <Sidebar submit={submit} />
      <Message submit={submit} />
    </div>
        </Parallax>
  )
}

export default Form