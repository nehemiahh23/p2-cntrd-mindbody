import React from 'react'

function Input() {

  function submitHandler(e) {
    e.preventDefault()
    console.log(e.target.data.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Form:</label>
      <input type="text" id="data" name="data"></input>
      <input type="submit"></input>
    </form>
  )
}

export default Input