import React from "react";
import Resumehead from "./Resumecomponents/Resumehead";
import Resumecontent from "./Resumecomponents/Resumecontent";

export default function Resume() {
  return (
    <div className="resume-container">
      <Resumehead />
      <Resumecontent />
    </div>
  );
}
