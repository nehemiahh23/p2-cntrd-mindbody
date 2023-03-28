import {Routes, Route} from "react-router-dom";
import Form from "./Form"
import Mind from "./Mind"
import Body from "./Body"
import Connection from "./Connection";
import Progress from "./Progress";
import Welcome from "./Welcome";
import NavBar from "./NavBar";



function App() {
  return (
      <>
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
