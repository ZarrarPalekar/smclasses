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

        {/* Score Card Table Section */}
        <div className="score-card-section">
          <h2 className="recent-results-section-subtitle">Score Card</h2>
          <div className="score-card-table-container">
            <table className="score-card-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>SSC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Students</td>
                  <td>Coming Soon</td>
                </tr>
                <tr>
                  <td>90% and Above</td>
                  <td>Coming Soon</td>
                </tr>
                <tr>
                  <td>80-89%</td>
                  <td>Coming Soon</td>
                </tr>
                <tr>
                  <td>70-79%</td>
                  <td>Coming Soon</td>
                </tr>
                <tr>
                  <td>60-69%</td>
                  <td>Coming Soon</td>
                </tr>
                <tr className="highlight-row">
                  <td>Average Score</td>
                  <td>Coming Soon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentResults;
