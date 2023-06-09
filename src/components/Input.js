import React, { useState, useEffect } from 'react'

function Input({ submit, setSubmit, activeDate, setUser }) {

  const [form, setForm] = useState({name: ""})

  // #region form data
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
    setForm({...form, [e.target.name]: e.target.value})
  }
  // #endregion
  
  const [face, setFace] = useState("😐")

  function rangeHandler(e) {
    
    changeHandler(e)

    if (e.target.value === "1") {
      setFace("😔")
    }
    else if (e.target.value === "2") {
      setFace("🙁")
    }
    else if (e.target.value === "3") {
      setFace("😐")
    }
    else if (e.target.value === "4") {
      setFace("🙂")
    }
    else if (e.target.value === "5") {
      setFace("😄")
    }}
    
  // #region side effect updates date in data as day increments

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
  // #endregion

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
    
    fetch('http://localhost:3002/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(form)})
      .then(res => res.json())
      .then(data => setUser(data))
    setForm({name: ""})
    
    setSubmit(true)
    setFace("😐")
    
  }

  if (!submit) {
    return (
      <div className='form-box-2'>
        <form onSubmit={submitHandler} className='body-form' style={{alignItems: "center"}}> 
          <h1>Daily Check-In</h1>
          <span>How are you feeling today?</span>

          <input onChange={ rangeHandler } type="range" min="1" max="5" name="mood" value={data.mood}></input>
          <h2 style={{margin: "0"}}>{ face }</h2>
          <input onChange={changeHandler} className="form-field" placeholder='Name' type="text" name="name" value={data.name}></input>

          <input onChange={changeHandler} className="form-field" placeholder='Hours' type="number" step=".5" name="sleep" value={data.sleep}></input>
          <textarea onChange={changeHandler} className="form-field" placeholder='Comment...' rows="4" cols="20" name="comment" value={data.comment}></textarea>
          <input type="submit" className="form-field"></input>
        </form>
      </div>
    )
  }
  else {
    return null
  }
}

export default Input