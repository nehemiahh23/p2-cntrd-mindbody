import React, { useState, useEffect } from 'react'

function Input({ submit, setSubmit, activeDate }) {

  // #region collect form data
  const [data, setData] = useState(
    {
      date: activeDate,
      mood: 3,
      sleep: "",
      comment: ""
    }
  )

  
  function changeHandler(e) {
    setData({...data, [e.target.name]: e.target.value})
  }
  // #endregion
  
  // side effect updates date in data as day increments
  useEffect(() => {
    setData(
      {
        date: activeDate,
        mood: 3,
        sleep: "",
        comment: ""
      }
    )
  }, [activeDate])

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
    
  }

  if (!submit) {
    return (
      <div className='form-box'>
        <form onSubmit={submitHandler} className='body-form' style={{alignItems: "center"}}> 
          <h1>Daily Check-In</h1>
          <span>How are you feeling today?</span>
          <span>😐</span>
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