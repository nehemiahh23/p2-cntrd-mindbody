import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {

    const navigate = useNavigate()

    function handleHover() {
        navigate('/MindPage')
    }

  return (
    <nav className="contain-me" onMouseOver={handleHover}>
        <NavLink to="/MindPage">Mind</NavLink>
        <br />
        <NavLink to="/BodyPage">Body</NavLink>
        <br />
        <NavLink to="/connection">Connection</NavLink>
    </nav>
  )
}

export default NavBar