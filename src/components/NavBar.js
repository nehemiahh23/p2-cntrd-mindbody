import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


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