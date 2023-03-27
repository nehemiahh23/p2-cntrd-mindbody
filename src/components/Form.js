import React from 'react'
import Input from "./Input"
import Sidebar from "./Sidebar"
import Message from "./Message"

function Form({ submit, setSubmit }) {

  return (
    <div id="form-page">
      <Input submit={submit} setSubmit={setSubmit} />
      <Sidebar submit={submit} />
      <Message submit={submit} />
    </div>
  )
}

export default Form