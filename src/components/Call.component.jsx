import React from "react";
import "./call.styles.css";

const Call = () => {
  return (
    <div>
      <a
        href="tel:+919923083001"
        target="_blank"
        rel="noopener noreferrer"
        className="float-call"
      >
        <i className="fa fa-phone my-float-call"></i>
      </a>
    </div>
  );
};

export default Call;
