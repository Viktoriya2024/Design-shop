import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  return (
    <nav className="navbar">
      <ul className={`item ${!isAnimating ? "stop-animation" : ""}`}>
        <li>D</li>
        <li>e</li>
        <li>s</li>
        <li>i</li>
        <li>g</li>
        <li>n</li>
        <li></li>
        <li>S</li>
        <li>t</li>
        <li>u</li>
        <li>d</li>
        <li>i</li>
        <li>o</li>
      </ul>
      <button onClick={toggleAnimation}>Toggle Animation</button>
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
