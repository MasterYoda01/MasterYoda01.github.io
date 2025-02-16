import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const currentTheme = body.getAttribute(dataThemeAttribute);
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  // Smooth scrolling function
  smoothScroll(e, targetId) {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      // Build the steps for the Typical animation
      this.titles = this.props.sharedData.titles
        .map((title) => [title.toUpperCase(), 1500])
        .flat();
    }

    // Memoized Title Animation
    const HeaderTitleTypeAnimation = React.memo(
      () => <Typical className="title-styles" steps={this.titles} loop={50} />,
      () => true
    );

    return (
      <header id="home">
        {/* Wrap content in a flex container that can wrap on smaller screens */}
        <div className="header-content">
          {/* Left Section: Profile Picture */}
          <div className="profile-container">
            <div className="profile-frame">
              <img
                className="profile-pic"
                src="../../images/myProfile.jpg"
                alt="Profile"
              />
            </div>
          </div>

          {/* Right Section: Name, Titles, Resume Button, Social Links */}
          <div className="header-text">
            <h1 className="header-name">{name}</h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>

            <div
              className="resume-button-container"
              style={{ marginTop: "20px" }}
            >
              <a
                href="resume_swe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                View Resume
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/joseph-ye/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/MasterYoda01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/josephye/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
