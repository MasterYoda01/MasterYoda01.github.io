import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Coursework from "./components/Coursework";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage) {
    document.documentElement.lang = pickedLanguage;
    var resumePath = `res_primaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  // swapCurrentlyActiveLanguage(oppositeLangIconId) {
  //   var pickedLangIconId =
  //     oppositeLangIconId === window.$primaryLanguageIconId
  //       ? window.$secondaryLanguageIconId
  //       : window.$primaryLanguageIconId;
  //   document
  //     .getElementById(oppositeLangIconId)
  //     .removeAttribute("filter", "brightness(40%)");
  //   document
  //     .getElementById(pickedLangIconId)
  //     .setAttribute("filter", "brightness(40%)");
  // }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(window.$primaryLanguage);
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Header sharedData={this.state.sharedData.basic_info} />
          <div className="col-md-12 mx-auto text-center language"></div>
          <About
            resumeBasicInfo={this.state.resumeData.basic_info}
            sharedBasicInfo={this.state.sharedData.basic_info}
          />
          <Experience
            resumeExperience={this.state.resumeData.experience}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Coursework />
          <Projects
            resumeProjects={this.state.resumeData.projects}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Skills
            sharedSkills={this.state.sharedData.skills}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      </div>
    );
  }
}

export default App;
