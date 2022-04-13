import React from "react";
import "./Resumehead.css";
export default function Resumehead() {
  return (
    <div
      className="resume-head-container"
      data-aos-mirror="true"
      data-aos="fade-up"
    >
      <div className="resume-head-img">
        <img src={require("../../Assets/filteredimg.jpeg")} alt="img" />
      </div>
      <p>Chemical Engineer and Web Developer</p>
    </div>
  );
}
