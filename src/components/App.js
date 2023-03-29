import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form"
import MindPage from "./MindPage"
import BodyPage from "./BodyPage"
import ConnectionPage from "./Connection";
import ProgressPage from "./Progress";
import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Hello from "./Hello";
import moment from "moment";

function App() {

  const [user, setUser] = useState({})
  const [submit, setSubmit] = useState(false)
  const [dateObj, setDateObj] = useState(moment())
  const [activeDate, setActiveDate] = useState(dateObj.format("L"))
  
  function dateIncrement() {
    setDateObj(dateObj.add(1, "days"))
    setActiveDate(dateObj.format("L"))
    setSubmit(false)
  }
  
  return (
      <>
      <button onClick={dateIncrement}>New Day</button>
      <span>{ activeDate }</span>
      <Hello user={user} setUser={setUser}/>
      <Welcome user={user}/>
      <Form submit={submit} setSubmit={setSubmit} activeDate={activeDate} />  
      <NavBar />
          <Routes>
            <Route path= "/ProgressPage" element={<ProgressPage />} />
            <Route path="/MindPage" element={<MindPage />} />
            <Route path="/BodyPage" element={<BodyPage />} />
            <Route path="/ConnectionPage" element={<ConnectionPage />} />
          </Routes>
      <ProgressPage submit={submit}/>
        </>
  );
}

export default App;
