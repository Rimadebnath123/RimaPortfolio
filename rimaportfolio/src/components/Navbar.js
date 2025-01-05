import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#042743" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          Rima's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          {isOpen ? (
            <span style={{ fontSize: "1.5rem", color: "#fff" }}>✖</span> // Close icon
          ) : (
            <span className="navbar-toggler-icon"></span> // Default menu icon
          )}
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
