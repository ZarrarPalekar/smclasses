import React from "react";
import "./toppers.styles.css";
import UserAvatar from "../assets/images/user-avatar.svg";

const SubjectToppers = ({ data }) => {
  return (
    <div id="subject-toppers" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Subject Toppers</h2>
          <p>
            Highlighting the peak of academic achievement in various subjects.
          </p>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div className="col-md-6 col-lg-3">
                  <div className="member">
                    <img
                      src={d.img || UserAvatar}
                      alt={d.name}
                      className={d.img && "member-pic set-bg"}
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h5>{d.details}</h5>
                    <p style={{ color: "black" }}>{d.name}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default SubjectToppers;
