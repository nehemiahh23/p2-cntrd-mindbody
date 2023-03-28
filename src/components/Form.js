import React from 'react'
import Input from "./Input"
import Sidebar from "./Sidebar"
import Message from "./Message"

function Form({ submit, setSubmit, activeDate }) {

  return (
    <div id="form-page">
      <Input submit={submit} setSubmit={setSubmit} activeDate={activeDate} />
      <Sidebar submit={submit} />
      <Message submit={submit} />
    </div>
  )
}

export default Form