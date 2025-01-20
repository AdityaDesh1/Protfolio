import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="AD" className="navbar-logo" />
        </Link>
        <h5 className="navbar-name">ADITYA DESHPANDE</h5>
      </div>

      <div className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
