import {Routes, Route} from "react-router-dom";
import Form from "./Form"
import MindPage from "./MindPage"
import BodyPage from "./BodyPage"
import ConnectionPage from "./Connection";
import ProgressPage from "./Progress";
import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Hello from "./Hello";
import {useState} from "react";



function App() {

  const [user, setUser] = useState({})


  return (
      <>
      <Hello user={user} setUser={setUser}/>
      <Welcome user={user}/>
      <Form />
      <div>
      <NavBar />
          <Routes>
            <Route path= "/ProgressPage" element={<ProgressPage />} />
            <Route path="/MindPage" element={<MindPage />} />
            <Route path="/BodyPage" element={<BodyPage />} />
            <Route path="/ConnectionPage" element={<ConnectionPage />} />
          </Routes>
      </div>
        </>
  );
}

export default App;
