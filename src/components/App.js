import {Routes, Route} from "react-router-dom";
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



function App() {

  const [user, setUser] = useState({})


  return (
      <>
      <Hello user={user} setUser={setUser}/>
      <Welcome user={user}/>
      <Form />
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
