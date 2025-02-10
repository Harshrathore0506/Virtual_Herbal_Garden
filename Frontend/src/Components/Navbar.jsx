import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  return (
    <div className="Nav">
      <h1>
        <NavLink to="/" className="nav-name">
          <i>Virtual Garden</i>
        </NavLink>
      </h1>
      <div className="Heading">
        <NavLink to="/" className="nav-name">
          Home
        </NavLink>
        <AnchorLink className="nav-name" offset={50} href="#Garden">
          <p>Garden</p>
        </AnchorLink>
        <NavLink to="/Contact" className="nav-name">
          Contact
        </NavLink>
        <NavLink to="/About" className="nav-name">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
