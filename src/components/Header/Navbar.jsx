import React from "react";
import "./Navbar.css"; 
import Logo from "../../assets/logos/Full color Logo HR.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Renyou logo" className="logo-img" />
      </div>

      {/* Navigation links */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Our doctors</a></li>
        <li><a href="#">Podcast</a></li>
        <li><a href="#">About us</a></li>
      </ul>

      {/* Primary button */}
      <button className="btn-primary">Join the Waiting List</button>
    </nav>
  );
}
