import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Design Stidio</h1>
      <ul>
        <li>
          <NavLink className="btn" to="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Home
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/decoration">
            <span></span>
            <span></span>
            <span></span>
            <span></span>About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/authentocation">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Request{" "}
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/products">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Our Products
          </NavLink>
        </li>
        <li>
          <NavLink className="btn" to="/basket">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Basket
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
