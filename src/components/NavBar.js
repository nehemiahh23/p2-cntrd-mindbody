import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {

    const navigate = useNavigate()

    function handleHover() {
        navigate('/mind')
    }

  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/progress">Progress</NavLink>
        <NavLink to="/mind">Mind</NavLink>
        <NavLink to="/body">Body</NavLink>
        <NavLink to="/connection">Connection</NavLink>
        <NavLink to="/nomatch">NoMatch</NavLink>
        <button onMouseOver={handleHover}>Explore</button>
    </nav>
  )
}

export default NavBar