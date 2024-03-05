import { Link, NavLink } from "react-router-dom";
import './Navigation.css';


function Navigation() {

  console.debug("Navigation");

  return (
    <nav className="Navigation navbar">
      <Link className="navbar-brand" to='/'>
        M.T.
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to='/'>
            Home
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to='/about'>
            About
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to='/portfolio'>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to='/blog'>
            Blog
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )

}

export default Navigation;
