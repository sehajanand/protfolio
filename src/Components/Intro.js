import React from "react";
import Intorimg from "./Introcomponents/Introimg.js";
import Intropara from "./Introcomponents/Intropara.js";
import "./Intro.css";
export default function Intro() {
  return (
    <div className="intro-container" data-aos-mirror="true" data-aos="fade-up">
      <Intropara />
      <Intorimg />
    </div>
  );
}
