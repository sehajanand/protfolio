import React from "react";
import "./Introimg.css";
export default function Intorimg() {
  return (
    <div className="intro-img-box">
      <img src={require("../../Assets/filteredimg.jpeg")} alt="img" id="introImg" />
    </div>
  );
}
