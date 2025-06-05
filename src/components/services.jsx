import React from "react";

export const Services = (props) => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Our services are specifically tailored to accommodate what's needed
            for the success of each student.
          </p>
        </div>
        <div className="services-grid">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="service-card">
                <div className="service-icon">
                  <i className={d.icon}></i>
                </div>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading services...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
