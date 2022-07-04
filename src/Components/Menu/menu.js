import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu(props) {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/home" style={{ color: "white", padding: "10px" }}>
                Home
              </NavLink>
            </li>
            <li style={{ "marginLeft": "30px" }}>
              <NavLink to="/about" style={{ color: "white", padding: "10px" }}>
                About
              </NavLink>
            </li>
            <li style={{ "marginLeft": "30px" }}>
              <NavLink to="/AccountManagement" style={{ color: "white", padding: "10px"}}>
                Account Info
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
