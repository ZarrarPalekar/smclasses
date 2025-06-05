import React from "react";

export const About = (props) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt="About SM Classes"
            />
          </div>
          <div className="about-content">
            <h2 className="section-title">About Us</h2>
            <p className="about-description">
              {props.data ? props.data.paragraph : "loading..."}
            </p>
            <p className="about-description">
              {props.data ? props.data.paragraph2 : "loading..."}
            </p>
            <h3 className="about-subtitle">Why Choose Us?</h3>
            <div className="about-why-list">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`why1-${i}`} className="about-why-item">
                        <span className="about-check">✔</span> {d}
                      </li>
                    ))
                  : "loading"}
              </ul>
              <ul>
                {props.data
                  ? props.data.Why2.map((d, i) => (
                      <li key={`why2-${i}`} className="about-why-item">
                        <span className="about-check">✔</span> {d}
                      </li>
                    ))
                  : "loading"}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
