import React from "react";

export const Team = (props) => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">
            We're a small but experienced team of tutors.
          </p>
        </div>
        <div className="team-grid">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="team-card">
                <div className="team-avatar">
                  <img src={d.img} alt={d.name} className="team-img" />
                </div>
                <div className="team-details">
                  <h4 className="team-name">{d.name}</h4>
                  <p className="team-role">{d.job}</p>
                  {d.job1 && <p className="team-role-alt">{d.job1}</p>}
                  {d.job2 && <p className="team-role-alt">{d.job2}</p>}
                </div>
              </div>
            ))
          ) : (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading team...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
