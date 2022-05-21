import React from "react";
import "./Myworkproject2details.css";
import { Link } from "react-router-dom";
export default function Work2details() {
  return (
    <>
      <h1 id="work2details">Zoonotics Website</h1>
      <h2 className="zoonotics-link">
        <a href="https://zoonotics-official.netlify.app/">
        https://zoonotics-official.netlify.app/        </a>
      </h2>
      <p>
        Zoonotics is an e-sports organization that organizes many e-sports
        tournaments on various games such as Free Fire, Battleground Mobile
        India, valorent, and many more. I am also an e-sports player of free
        fire and once I was playing a tournament with my team organized by them.
        We secured the second position in that tournament and when we were
        talking with their officials related to our prize money, they mentioned
        that they needed to develop a website, so then I introduced my web
        developer side to them and they agreed to take me on board. <br />
        Days it took to get completed-20 to 25 <br /> No of hours given to
        project per day by me- 6 to 7. <br /> <em>Link For Code - <a href="https://github.com/sehajanand/Zoonotics">https://github.com/sehajanand/Zoonotics</a> </em>
      </p>
      <h3 className="other-projects">Other Projects</h3>
      <div className="other-works">
        <Link to="/work1">Text Editor</Link>
        <Link to="/work3">News App</Link>
      </div>
    </>
  );
}
