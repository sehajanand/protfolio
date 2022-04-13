import React from "react";
import "./Contact.css";
import Contactbox from "./Contactcomponents/Contactbox";
export default function Contact() {
  return (
    <div
      className="contact-container"
      data-aos-mirror="true"
      data-aos="fade-up"
    >
      <h2>Contact Me</h2>
      <Contactbox />
    </div>
  );
}
