import React from "react";
import "./whatsapp.styles.css";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=+919923083001&text=Hi%20sir%21%20I%20came%20here%20from%20your%20classes%20website."
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
