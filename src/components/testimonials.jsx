import React from "react";

export const Testimonials = (props) => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
        </div>
        <div className="testimonials-grid">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="testimonial-card">
                <div className="testimonial-avatar">
                  <img src={d.img} alt={d.name} className="testimonial-img" />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-quote">“{d.text}”</p>
                  <div className="testimonial-meta">- {d.name}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading testimonials...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
