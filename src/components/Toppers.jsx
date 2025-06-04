import React from "react";
import UserAvatar from "../assets/images/user-avatar.svg";

const Toppers = ({ data }) => {
  return (
    <section id="toppers" className="toppers-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Toppers</h2>
          <p className="section-subtitle">
            Our students' success speaks volumes about the quality of education
            we provide.
          </p>
        </div>
        <div className="toppers-grid">
          {data ? (
            data.map((d, i) => (
              <div className="topper-card" key={d.name + i}>
                <div className="topper-avatar">
                  <img
                    src={d.img || UserAvatar}
                    alt={d.name}
                    className="topper-img"
                  />
                </div>
                <div className="topper-details">
                  <h5 className="topper-score">{d.details}</h5>
                  <p className="topper-name">{d.name}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading toppers...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
