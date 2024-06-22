import React from "react";
import "./toppers.styles.css";
import UserAvatar from "../assets/images/user-avatar.svg";

const Toppers = ({ data }) => {
  return (
    <div id="toppers" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Toppers</h2>
          <p>
            Our students success speaks volumes about the quality of education
            we provide to our students.
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
                    <p>{d.name}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Toppers;
