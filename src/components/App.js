import { useState, useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Form from "./Form"
import MindPage from "./MindPage"
import WorkoutPage from "./WorkoutPage"
import ConnectionPage from "./ConnectionPage";
import ProgressPage from "./ProgressPage";
import WelcomePage from "./WelcomePage";
import NavBar from "./NavBar";
import moment from "moment";
import HomePage from "./HomePage";


function App() {
  const [user, setUser] = useState({});
  const [submit, setSubmit] = useState(false);
  const [dateObj, setDateObj] = useState(moment());
  const [activeDate, setActiveDate] = useState(dateObj.format("L"));
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  // function dateIncrement() {
  //   setDateObj(dateObj.add(1, "days"));
  //   setActiveDate(dateObj.format("L"));
  //   setSubmit(false);
  // }

  return (
    <>
      {/* <button onClick={dateIncrement}>New Day</button>
      <span>{activeDate}</span> */}
      <HomePage className="home-page" />
      <WelcomePage className="welcome-page" />
      <div>
        <Form
          submit={submit}
          setSubmit={setSubmit}
          activeDate={activeDate}
          setUser={setUser}
        />
        <NavBar />
        <Routes>
          <Route path="/ProgressPage" element={<ProgressPage />} />
          <Route path="/MindPage" element={<MindPage />} />
          <Route path="/BodyPage" element={<WorkoutPage />} />
          <Route path="/ConnectionPage" element={<ConnectionPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;