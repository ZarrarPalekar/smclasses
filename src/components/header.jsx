import React, { useEffect } from "react";
import { scroll } from "../App";

export const Header = (props) => {
  useEffect(() => {
    // Add animation class after component mounts
    const header = document.querySelector(".header-content");
    if (header) {
      header.classList.add("animate");
    }
  }, []);

  return (
    <header id="header" className="hero-section">
      <div className="hero-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 header-content">
              <div className="hero-text">
                <h1 className="main-title">
                  <span className="highlight">We are</span>
                  <span className="brand-name">SM Classes</span>
                </h1>
                <p className="hero-description">
                  Inspire your child's success by joining us
                </p>
                <div className="hero-buttons">
                  <a
                    href="#features"
                    className="btn btn-primary btn-lg page-scroll"
                    onClick={(e) => {
                      e.preventDefault();
                      scroll.animateScroll(
                        document.querySelector("#recent-results")
                      );
                    }}
                  >
                    Our Results
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-outline btn-lg page-scroll"
                    onClick={(e) => {
                      e.preventDefault();
                      scroll.animateScroll(document.querySelector("#contact"));
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};
