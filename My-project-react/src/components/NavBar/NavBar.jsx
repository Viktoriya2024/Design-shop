import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Design your interior</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/decoration">About Us</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="authentocation">Registration</NavLink>
        </li>
        <li>
          <NavLink to="products">Our Products</NavLink>
        </li>
        <li>
          <NavLink to="Basket">Basket</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
