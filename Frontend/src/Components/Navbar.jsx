import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Log from "../assets/avatar.png";
import cartlogo from "../assets/grocery-store.png";
import Home from "../assets/home.png";
import Contact from "../assets/phone.png";
import orderCart from "../assets/shopping-cart.png";
import { ShopContext } from "../Context/ShopContext";
const Navbar = () => {
  const { navigate, token, setToken } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
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
                onClick={logout}
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
