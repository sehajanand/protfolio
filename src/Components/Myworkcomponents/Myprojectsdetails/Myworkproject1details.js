import React from "react";
import "./Myworkproject1details.css";
import { Link } from "react-router-dom";
export default function Work1details() {
  return (
    <>
      <h1 id="work1details">Text Editor</h1>
      <h2 className="text-editor-link">
        <a href="https://sehajanand.github.io/Text-Editor/">
          https://sehajanand.github.io/Text-Editor/
        </a>
      </h2>
      <p>
        In this project, I aim to make an application that can edit text. This
        web app can help to improve indentation of text, copy text, change it to
        lower case or uppercase, it can also make or delete notes of text you
        entered.You can also preview the text , or find number of words and
        characters in the text , or find the time it would take for a normal
        person to read it. This was my first react project. <br /> Days it took
        to get completed-5 <br /> No of hours given to project per day by me- 4
        to 6{" "} <br />
        <em>Link For Code - <a href="https://github.com/sehajanand/Text-Editor">https://github.com/sehajanand/Text-Editor</a></em>
      </p>
      <h3 className="other-projects">OTHER PROJECTS</h3>
      <div className="other-works">
        <Link to="/work2">Zoonotics</Link>
        <Link to="/work3">News App</Link>
      </div>
    </>
  );
}
