import React, { useState } from "react";
import Form from "./Form"
import Mind from "./Mind"
import Body from "./Body"
import Connection from "./Connection";

function App() {

  const [submit, setSubmit] = useState(false)

  return (
    <>
      <Form submit={submit} setSubmit={setSubmit}/>
      <Mind />
      <Body />
      <Connection />
    </>
  );
}

export default App;
