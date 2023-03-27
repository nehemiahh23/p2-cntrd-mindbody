import React from 'react'

function Input({ submit, setSubmit }) {

  function submitHandler(e) {
    e.preventDefault()
    
    setSubmit(true)
  }

  if (!submit) {
    return (
      <form onSubmit={submitHandler}>
        <label>Form: </label>
        <input type="text" id="data" name="data"></input>
        <input type="submit"></input>
      </form>
    )
  }
  else {
    return null
  }
}

export default Input