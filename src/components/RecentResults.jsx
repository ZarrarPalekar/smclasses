import React from "react";
import UserAvatar from "../assets/images/user-avatar.svg";

const RecentResults = ({ data }) => {
  return (
    <section id="recent-results" className="recent-results-section">
      <div className="container">
        <div className="recent-results-section-header">
          <h2 className="section-title">Our Results</h2>
          <h2 className="section-title">2024-2025</h2>
          <h2 className="recent-results-section-subtitle">SSC</h2>
        </div>
        <div className="recent-results-grid">
          {data && data.SSC ? (
            data.SSC.map((d, i) => (
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
        <div className="recent-results-section-header">
          <h2 className="recent-results-section-subtitle ">HSC</h2>
        </div>
        <div className="recent-results-grid">
          {data && data.HSC ? (
            data.HSC.map((d, i) => (
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

export default RecentResults;
