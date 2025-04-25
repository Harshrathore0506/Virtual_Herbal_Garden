import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Log from "../assets/avatar.png";
import { ShopContext } from "../Context/ShopContext";
import Swal from "sweetalert2";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger icons

const Navbar = () => {
  const { navigate, token, setToken } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
        localStorage.removeItem("token");
        setToken("");
        console.log("Logged out");
      }
    });
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1>
          <NavLink to="/" className="navbar-logo">
            <i>Virtual Garden</i>
          </NavLink>
        </h1>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/orders" className="nav-link" onClick={() => setMenuOpen(false)}>
            <p>Orders</p>
          </NavLink>
          <NavLink to="/Cart" className="nav-link" onClick={() => setMenuOpen(false)}>
            <p>Cart</p>
          </NavLink>
          <NavLink to="/Contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            <p>Contact</p>
          </NavLink>
          <div className="auth-section">
            {token ? (
              <img
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="auth-img"
                src={Log}
                alt="Logout"
              />
            ) : (
              <img
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="auth-img"
                src={Log}
                alt="Login"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
