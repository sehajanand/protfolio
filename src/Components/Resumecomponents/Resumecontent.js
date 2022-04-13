import React from "react";
import Resumecontentsubbox1 from "./Resumecontentsubbox1";
import Resumecontentsubbox2 from "./Resumecontentsubbox2";
import "./Resumecontent.css";
export default function Resumecontent() {
  return (
    <div
      className="resume-content-container"
      data-aos-mirror="true"
      data-aos="fade-up"
    >
      <Resumecontentsubbox1 />
      <Resumecontentsubbox2 />
    </div>
  );
}
