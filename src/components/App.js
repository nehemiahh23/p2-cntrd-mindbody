import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Form from "./Form"
import MindPage from "./MindPage"
import BodyPage from "./BodyPage"
import ConnectionPage from "./Connection";
import ProgressPage from "./ProgressPage";
import Welcome from "./Welcome";
import NavBar from "./NavBar";
import moment from "moment";

function App() {

  const [user, setUser] = useState({})
  const [submit, setSubmit] = useState(false)
  const [dateObj, setDateObj] = useState(moment())
  const [activeDate, setActiveDate] = useState(dateObj.format("L"))
  const navigate = useNavigate()
  
  function dateIncrement() {
    setDateObj(dateObj.add(1, "days"))
    setActiveDate(dateObj.format("L"))
    setSubmit(false)
    navigate("/")
  }
  
  return (
      <>
      <h1 className='front-page-header'>cntrd MindBody</h1>
      <button onClick={dateIncrement}>New Day</button>
      <span>{ activeDate }</span>
      <Welcome user={user}/>
      <Form submit={submit} setSubmit={setSubmit} activeDate={activeDate} setUser={setUser}/>  
      <NavBar submit={submit}/>
          <Routes>
            <Route path= "/ProgressPage" element={<ProgressPage submit={submit} />} />
            <Route path="/MindPage" element={<MindPage />} />
            <Route path="/BodyPage" element={<BodyPage />} />
            <Route path="/ConnectionPage" element={<ConnectionPage />} />
          </Routes>
        </>
  );
}

export default App;
