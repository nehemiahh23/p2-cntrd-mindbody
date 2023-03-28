import React, { useState } from "react";
import Form from "./Form"
import Mind from "./Mind"
import Body from "./Body"
import Connection from "./Connection";
import moment from "moment";

function App() {

  const [submit, setSubmit] = useState(false)
  const [dateObj, setDateObj] = useState(moment())
  const [activeDate, setActiveDate] = useState(dateObj.format("L"))

  function dateIncrement() {
    setDateObj(dateObj.add(1, "days"))
    setActiveDate(dateObj.format("L"))
  }

  return (
    <>
      <button onClick={dateIncrement}>New Day</button>
      <span>{ activeDate }</span>
      <Form submit={submit} setSubmit={setSubmit}/>
      <Mind />
      <Body />
      <Connection />
    </>
  );
}

export default App;
