import React from "react";
import '../Styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          Your Logo
        </a>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
