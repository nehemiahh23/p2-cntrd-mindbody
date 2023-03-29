import React, { useState } from 'react'

function Input({ submit, setSubmit }) {

  // #region collect form data
  const [data, setData] = useState(
    {
      date: "",
      mood: 3,
      sleep: "",
      comment: ""
    }
  )

  function changeHandler(e) {
    setData({...data, [e.target.name]: e.target.value})
  }
  
  function submitHandler(e) {
    e.preventDefault()

    fetch("http://localhost:3002/statuses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(
        {
          "date": data.date,
          "mood": parseInt(data.mood),
          "sleep": parseInt(data.sleep),
          "comment": data.comment
        }
      )
    })
    
    setSubmit(true)
    setData(
      {
        date: "",
        mood: "",
        sleep: "",
        comment: ""
      }
    )
  }

  if (!submit) {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <label>Form: </label>
          <input onChange={changeHandler} type="range" min="1" max="5" name="mood" value={data.mood}></input>
          <input onChange={changeHandler} type="number" step=".5" name="sleep" value={data.sleep}></input>
          <input onChange={changeHandler} type="text" name="comment" value={data.comment}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
  else {
    return null
  }
}

export default Input