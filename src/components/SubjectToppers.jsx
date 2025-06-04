import React from "react";
import UserAvatar from "../assets/images/user-avatar.svg";

const SubjectToppers = ({ data }) => {
  return (
    <section id="subject-toppers" className="toppers-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Subject Toppers</h2>
          <p className="section-subtitle">
            Highlighting the peak of academic achievement in various subjects.
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
              <p>Loading subject toppers...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubjectToppers;
