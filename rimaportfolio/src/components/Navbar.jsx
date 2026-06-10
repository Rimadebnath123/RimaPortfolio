import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand text-gradient" href="#home">
          Rima's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          {isOpen ? (
            <span style={{ fontSize: "1.5rem", color: "#fff" }}>✖</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{ animationDelay: "0.1s" }}>
              <a className="nav-link custom-nav-link" href="#home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item" style={{ animationDelay: "0.2s" }}>
              <a className="nav-link custom-nav-link" href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="nav-item" style={{ animationDelay: "0.3s" }}>
              <a className="nav-link custom-nav-link" href="#services" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li className="nav-item" style={{ animationDelay: "0.4s" }}>
              <a className="nav-link custom-nav-link" href="#Portfolio" onClick={handleLinkClick}>
                Portfolio
              </a>
            </li>
            <li className="nav-item" style={{ animationDelay: "0.5s" }}>
              <a className="nav-link custom-nav-link" href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
