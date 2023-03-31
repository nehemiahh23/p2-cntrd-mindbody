import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MindIcon from "../images/Eco_(24).jpg"
import BodyIcon from "../images/Health_(23).jpg"
import ConnectionIcon from "../images/vecteezy_icon-symbol-chat-outline-vector-illustration_.jpg"
import ProgressIcon from "../images/Statistical__Graph.jpg"


function NavBar({ submit }) {

  // useEffect(() => {
  //   submit ? setDisplay(true) : setDisplay(false)
  // }, [submit])

  // const [displayNav, setDisplay] = useState(false)
  // const [rendered, setRendered] = useState(false)

  const appearStyle = {
    animation: "slideIn 2s",
    right: "0vw"
  }

  if (submit) {
    return (
        <nav className="nav" style={ appearStyle }>
          <NavLink to="/MindPage"><img className="icons" src={ MindIcon } alt='Body'></img></NavLink>
          <br />
          <NavLink to="/BodyPage">
            <img className="icons" src={ BodyIcon } alt='Body'></img>
          </NavLink>
          <br />
          <NavLink to="/ConnectionPage"><img className="icons" src={ ConnectionIcon } alt='Body'></img></NavLink>
          <br />
          <NavLink to="/ProgressPage"><img className="icons" src={ ProgressIcon } alt='Body'></img></NavLink>
        </nav>
    )
  }
  else {
    return (
      <nav className="nav">
          <NavLink to="/ProgressPage">Progress</NavLink>
          <br />
          <NavLink to="/MindPage">Mind</NavLink>
          <br />
          <NavLink to="/BodyPage">Body</NavLink>
          <br></br>
          <NavLink to="/ConnectionPage">Connection</NavLink>
      </nav>
    )
  }
}

export default NavBar