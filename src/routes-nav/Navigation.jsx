import { Link, NavLink } from "react-router-dom";
import './Navigation.css';


function Navigation() {

  console.debug("Navigation");

  return (

    <nav className="Navigation navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
      <Link className="navbar-brand" to='/'>
        M.T.
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </div>
      </div>
    </nav> 
  )

}

export default Navigation;
