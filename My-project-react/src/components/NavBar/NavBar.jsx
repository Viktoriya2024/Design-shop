import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [isAnimating, setIsAnimating] = useState(true);
  const navItems = [
    { to: "/", text: "Home" },
    { to: "/decoration", text: "About Us" },
    { to: "/authentocation", text: "Request" },
    { to: "/products", text: "Our Products" },
    { to: "/basket", text: "Basket" },
  ];
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  return (
    <nav className="navbar">
      <ul className="item">
        {["D", "e", "s", "i", "g", "n", "S", "t", "u", "d", "i", "o"].map(
          (letter, index) => (
            <li key={index} className={!isAnimating ? "stop-animation" : ""}>
              {letter}
            </li>
          )
        )}
      </ul>
      <button className="animation-button" onClick={toggleAnimation}>
        Stop Animation
      </button>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink className="btn" to={item.to}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
