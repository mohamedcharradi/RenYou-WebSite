import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 
import Logo from "../../assets/logos/Full color Logo HR.png";

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Renyou logo" className="logo-img" />
      </div>

      {/* Navigation links */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className={({ isActive }) => isActive ? "active" : ""}>Our doctors</NavLink>
        </li>
        <li>
          <NavLink to="/podcasts" className={({ isActive }) => isActive ? "active" : ""}>Podcast</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About us</NavLink>
        </li>
      </ul>

      {/* Primary button triggers modal */}
      <button className="btn-primary" onClick={onOpenModal}>
        Join the Waiting List
      </button>
    </nav>
  );
}
