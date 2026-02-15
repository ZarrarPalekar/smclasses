import React, { useState, useEffect } from "react";
import logo from "../assets/images/smclasses-logo.jpeg";
import ThemeToggle from "./ThemeToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container navbar-flex">
        <a className="navbar-brand page-scroll" href="#page-top">
          <img src={logo} alt="SM Classes Logo" />
        </a>
        <div className="navbar-controls">
          <div className="navbar-theme-toggle">
            <ThemeToggle className="theme-toggle-mobile" />
          </div>
          <button
            type="button"
            className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul
            className={`nav navbar-nav navbar-right ${isMenuOpen ? "active" : ""}`}
          >
            <li>
              <a
                href="#features"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#recent-results"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="nav-theme-toggle desktop-only">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
