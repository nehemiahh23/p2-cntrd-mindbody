import React from 'react';
import Input from "./Input";
import Message from "./Message";
import { Parallax } from "react-parallax";
import "./Form.css";
import backgroundImage from "../images/form1-bg.jpg";


function Form({ submit, setSubmit, activeDate, setUser }) {

  return (
    <div className="form-page">
  <Parallax bgImage={backgroundImage} strength={500}>
      <Input submit={submit} setSubmit={setSubmit} activeDate={activeDate} setUser={setUser} />
      <Message submit={submit} />
  </Parallax>
      </div>
  )
}

export default Form
