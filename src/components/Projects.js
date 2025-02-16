import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    const detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    const detailsModalClose = () => this.setState({ detailsModalShow: false });

    let sectionName, projects;
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.projects;
      projects = this.props.resumeProjects.map((project) => {
        return (
          <div
            className="project-item"
            key={project.title}
            onClick={() => detailsModalShow(project)}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto">
                <img
                  src={project.images[0]}
                  alt="project screenshot"
                  className="project-img"
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="projects-grid">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
