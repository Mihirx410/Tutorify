import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  // State to track whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu state
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 text-dark" href="#">
          TUTORIFY
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Handle click with React
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links with Dynamic Class */}
        <div className={`collapse navbar-collapse me-auto ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">Pricing</a>
            </li>
          </ul>
            {/* Sign In & Login Buttons */}
        <div className="d-flex" id="header-buttons">
          <u><a href="#" className="text-dark me-4 text-decoration-none" id="sign-button">Sign In</a></u>
          <button className="btn btn-warning fw-bold px-4" id="login-btn">Login</button>
        </div>
        </div>

      
      </div>
    </nav>
  );
};

export default Header;
