import React from "react";
import "./Intropara.css";
export default function Intropara() {
  let dateVar = new Date();
  return (
    <div className="intro-para-box">
      <p>
        {" "}
        {dateVar.getHours() < 12
          ? "Good Morning"
          : dateVar.getHours() < 17
          ? "Good Afternoon"
          : "Good Evening"}
      </p>
      <p>
        I am a freelance web developer and a chemical engineer based in Jammu
        and Kashmir, India. I am currently pursuing my B Tech in chemical
        engineering from NIT Srinagar and simultaneously work on web
        development. Feel free to contact me for anything.
      </p>
    </div>
  );
}
