import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Welcome to our Shop</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/authentication">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/products">Our Products</NavLink>
        </li>
        <li>
          <NavLink to="/Basket">Basket</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
