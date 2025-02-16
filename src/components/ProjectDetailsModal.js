import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModal extends Component {
  render() {
    let tech, img, title, description, url;
    if (this.props.data) {
      const { technologies, images } = this.props.data;
      title = this.props.data.title;
      description = this.props.data.description;
      url = this.props.data.url;

      if (technologies) {
        tech = technologies.map((icon, i) => {
          return (
            <li className="list-inline-item tech-item" key={i}>
              <div className="text-center">
                <i className={icon.class} style={{ fontSize: "300%" }}>
                  <p className="tech-name" style={{ fontSize: "30%" }}>
                    {icon.name}
                  </p>
                </i>
              </div>
            </li>
          );
        });
      }

      if (images) {
        img = images.map((elem, i) => {
          return <div key={i} data-src={elem} />;
        });
      }
    }

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="modal-body-content">
          <div className="slider-container">
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>
              &nbsp;
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>
              &nbsp;
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="content-container">
            <h3 className="project-title">
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i className="fas fa-external-link-alt link-icon"></i>
                </a>
              ) : (
                <div className="no-link">
                  No link to Github available – private & confidential
                </div>
              )}
            </h3>
            <p className="modal-description">{description}</p>
            <div className="tech-list-container">
              <ul className="list-inline mx-auto tech-list">{tech}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
