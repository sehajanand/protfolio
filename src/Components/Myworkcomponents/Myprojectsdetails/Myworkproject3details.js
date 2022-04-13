import React from "react";
import "./Myworkproject3details.css";
import { Link } from "react-router-dom";
export default function Work3details() {
  return (
    <>
      <h1 id="work3details">News App</h1>
      <h2 className="news-app-link">
        <a href="https://www.youtube.com/watch?v=9Ap5ekVARZg">
          https://www.youtube.com/watch?v=9Ap5ekVARZg
        </a>
      </h2>
      <p>
        In this project, I aim to create a website where one can watch news
        related to various topics such as business, sports, entertainment. I
        have used a news API that has limited news content because it was part
        of a free plan instead of a paid one. So please bear with me if you can
        watch limited news. <br />
        Days it took to get completed-3 to 4 <br /> No of hours given to project
        per day by me- 4 to 5.{" "}
      </p>
      <h3 className="other-projects">Other Projects</h3>
      <div className="other-works">
        <Link to="/work1">Text Editor</Link>
        <Link to="/work2">Zoonotics</Link>
      </div>
    </>
  );
}
