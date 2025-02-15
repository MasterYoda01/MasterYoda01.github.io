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
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
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
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header id="home">
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

          {/* Right Section: Name, Titles, and Social Links */}
          <div className="header-text">
            <h1 className="header-name">{name}</h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>

            <div
              className="resume-button-container"
              style={{ marginTop: "80px" }}
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
