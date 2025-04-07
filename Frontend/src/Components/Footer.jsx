import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1>
          <NavLink to="/" className="foot-name">
            <i>Virtual Garden</i>
          </NavLink>
        </h1>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2025 all right reserved</p>
        <p>Designed by Harsh Rathore and Harshvardhan Panchal</p>
      </div>
    </div>
  );
};

export default Footer;
