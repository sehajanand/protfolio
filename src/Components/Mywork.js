import React from "react";
import "./Mywork.css";
import Myworkintro from "./Myworkcomponents/Myworkintro";
import Myworkproject1 from "./Myworkcomponents/Myworkproject1";
import Myworkproject2 from "./Myworkcomponents/Myworkproject2";
import Myworkproject3 from "./Myworkcomponents/Myworkproject3";
export default function Mywork() {
  return (
    <div className="mywork-box" data-aos="fade-up" data-aos-mirror="true">
      <Myworkintro />
      <div className="project-box">
        <Myworkproject1 />
        <Myworkproject2 />
        <Myworkproject3 />
      </div>
    </div>
  );
}
