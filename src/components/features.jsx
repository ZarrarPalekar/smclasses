import React from "react";

export const Features = (props) => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Discover what makes SM Classes the perfect choice for your child's
            education
          </p>
        </div>
        <div className="features-grid">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="feature-card animate">
                <div className="feature-icon">
                  <i className={d.icon}></i>
                </div>
                <div className="feature-content">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading features...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
