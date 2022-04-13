import React from "react";
import Logo from "./Headercomponents/Logo.js";
import Navbar from "./Headercomponents/Navbar.js";

export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <style jsx="true">{`
        header {
          transition: height 1s ease-in-out;
        }
      `}</style>
    </>
  );
}
