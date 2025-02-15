import React from "react";
import "../NavBar.scss";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">Joseph Ye</div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Experiences</a>
          </li>
          <li>
            <a href="#coursework">Coursework</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
