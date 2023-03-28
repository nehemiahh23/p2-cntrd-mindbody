import {Routes, Route} from "react-router-dom";
import Form from "./Form"
import Mind from "./Mind"
import Body from "./Body"
import Connection from "./Connection";
import Progress from "./Progress";
import Welcome from "./Welcome";
import NavBar from "./NavBar";


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
      <Welcome />
      <Form />
      <NavBar />
          <Routes>
            <Route path="/progress" element={<Progress />} />
            <Route path="/mind" element={<Mind />} />
            <Route path="/body" element={<Body />} />
            <Route path="/connection" element={<Connection />} />
          </Routes>
        </>
  );
}

export default App;
