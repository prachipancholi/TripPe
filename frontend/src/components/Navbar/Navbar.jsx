import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} className="d-inline-block align-top" alt="Logo" />
            TripPe
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/aboutUs">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>

              <li className="nav-item active">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
