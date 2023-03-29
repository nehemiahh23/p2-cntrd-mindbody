import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form"
import MindPage from "./MindPage"
import BodyPage from "./BodyPage"
import Connection from "./Connection";
import Progress from "./Progress";
import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Hello from "./Hello";
import Sidebar from "./Sidebar";
import {useState} from "react";


import moment from "moment";

function App() {

  const [user, setUser] = useState({})
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
      <Hello user={user} setUser={setUser}/>
      <Welcome user={user}/>
      <Form submit={submit} setSubmit={setSubmit} />
      <Progress />
      <Sidebar />
      <NavBar />
          <Routes>
            <Route path="/MindPage" element={<MindPage />} />
            <Route path="/BodyPage" element={<BodyPage />} />
            <Route path="/Connection" element={<Connection />} />
          </Routes>
        </>
  );
}

export default App;
