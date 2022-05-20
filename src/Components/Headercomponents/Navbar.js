import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger.js";
export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const workClick = () => {
    window.scrollTo({
      top: 900.7999877929688,
      left: 0,
      behavior: "smooth",
    });
  };
  const contactClick = () => {
    window.scrollTo({
      top: 2451.199951171875,
      left: 0,
      behavior: "smooth",
    });
  };
  const workClick2 = () => {
    window.scrollTo({
      top: 1622.4000244140625,
      left: 0,
      behavior: "smooth",
    });
  };
  const contactClick2 = () => {
    window.scrollTo({
      top: 4699.2001953125,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="navbar">
      <ul id="notHamburgerNavigation">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <button className="navbar-links" onClick={workClick}>
             Work
          </button>
        </li>
        <li>
          <Link to="/" className="navbar-links">
            Blog
          </Link>
        </li>
        <li>
          <button className="navbar-links" onClick={contactClick}>
            Contact
          </button>
        </li>
      </ul>
      <div className="hamburgerBox" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      {hamburgerOpen && (
        <ul id="hamburgerNavigation">
          <li>
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li>
            <button className="navbar-links" onClick={workClick2}>
               Work
            </button>
          </li>
          <li>
            <Link to="/" className="navbar-links">
              Blog
            </Link>
          </li>
          <li>
            <button className="navbar-links" onClick={contactClick2}>
              Contact
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
