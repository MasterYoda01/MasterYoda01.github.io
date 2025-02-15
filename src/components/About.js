import React, { Component } from "react";

class About extends Component {
  render() {
    let firstProfilePic, secondProfilePic, sectionName, about;

    if (this.props.sharedBasicInfo) {
      firstProfilePic = "images/" + this.props.sharedBasicInfo.image;
      secondProfilePic = "images/" + this.props.sharedBasicInfo.image2; // example
    }
    if (this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.about;
      about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="container">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>

          {/* Main flex container */}
          <div className="about-content">
            {/* Wrap both pictures in a sub-container */}
            <div className="about-pictures">
              <div className="about-profile-container">
                <div className="about-profile-frame">
                  <img
                    className="about-profile-pic"
                    src={firstProfilePic}
                    alt="First profile"
                  />
                </div>
              </div>

              <div className="about-profile-container">
                <div className="about-profile-frame">
                  <img
                    className="about-profile-pic"
                    src={secondProfilePic}
                    alt="Second profile"
                  />
                </div>
              </div>
            </div>

            {/* About description box */}
            <div className="about-description-box">
              <div className="about-description-content">
                <p className="about-description">{about}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
