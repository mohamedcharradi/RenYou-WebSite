import React from "react";
import { Link } from "react-router-dom";
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">Our doctors</Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
        <li><Link to="/about">About us</Link></li>
      </ul>

      {/* Primary button */}
      <button className="btn-primary">Join the Waiting List</button>
    </nav>
  );
}
