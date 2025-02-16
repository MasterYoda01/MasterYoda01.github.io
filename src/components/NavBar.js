import React, { useState } from "react";
import "../NavBar.scss";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">Joseph Ye</div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => setMenuOpen(false)}>
            Experiences
          </a>
        </li>
        <li>
          <a href="#coursework" onClick={() => setMenuOpen(false)}>
            Coursework
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>
      </ul>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;
