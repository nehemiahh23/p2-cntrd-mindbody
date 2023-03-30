import { NavLink, useNavigate } from 'react-router-dom'


function NavBar() {
  const navigate = useNavigate() 

    function handleHover() {

    }

  return (
    <nav className="nav" onMouseOver={handleHover}>
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

export default NavBar