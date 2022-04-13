import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="element-left">SEHAJ ANAND</div>
      <div className="element-center">Copyright &copy; Sehaj Anand</div>
      <div className="element-right">
        <ul>
          <li>
            <a href="https://discord.gg/VnESj94tGg">
              <img src={require("../Assets/dc.jpg")} alt="dc" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sehajanand">
              <img src={require("../Assets/github.png")} alt="insta" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100078141782671">
              <img src={require("../Assets/facebook.png")} alt="fb" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sehaj-anand-67aa35219/">
              <img src={require("../Assets/linkden.png")} alt="linkden" />
            </a>
          </li>
        </ul>{" "}
      </div>
    </footer>
  );
}
