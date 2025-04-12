import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Log from "../assets/avatar.png";
import { ShopContext } from "../Context/ShopContext";
import Swal from "sweetalert2";
const Navbar = () => {
  const { navigate, token, setToken } = useContext(ShopContext);

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
        // Actual logout logic here
        navigate("/login");
        localStorage.removeItem("token");
        setToken("");
        console.log("Logged out");
      }
    });
  };

  return (
    <div className="nav">
      <div className="Nav">
        <h1>
          <NavLink to="/" className="nav-name">
            <i>Virtual Garden</i>
          </NavLink>
        </h1>
        <div className="Heading">
          <NavLink to="/" className="nav-name">
            <p>Home</p>
          </NavLink>
          <NavLink to="/orders" className="nav-name">
            <p>Orders</p>
          </NavLink>
          <NavLink to="/Cart" className="nav-name">
            <p>Cart</p>
          </NavLink>
          <NavLink to="/Contact" className="nav-name">
            <p>Contact</p>
          </NavLink>
          <div className="flex items-center gap-4">
            {/* Login/Logout Icon */}
            {token ? (
              <img
                onClick={handleLogout}
                className="auth-img log-img"
                src={Log}
                alt="Logout Icon"
              />
            ) : (
              <img
                onClick={() => navigate("/login")}
                className="auth-imgn log-img"
                src={Log}
                alt="Login Icon"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
