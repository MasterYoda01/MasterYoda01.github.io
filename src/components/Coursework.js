import React, { Component } from "react";
import "../Coursework.scss"; // Ensure this path is correct

class Coursework extends Component {
  render() {
    const coursework = {
      "Math & Theoretical Foundations": [
        "Differential Equations (18.03)",
        "Linear Algebra (18.06)",
        "Math for Computer Science (6.1200)",
      ],
      "Core Computer Science Courses": [
        "Data Structures & Algorithms (6.1210)",
        "Design & Analysis of Algorithms (6.1220)",
        "Computation Structures (6.1910)",
        "Software Construction (6.1020)",
      ],
      "AI & Machine Learning": [
        "Representation, Inference, and Reasoning in AI (6.4110)",
        "Introduction to Machine Learning (6.3900)",
        "AI, Decision-Making & Society (6.3952)",
        "TinyML & Efficient Deep Learning (6.5940)",
        "Advances in Computer Vision (6.8301)",
      ],
      "Software & Systems": [
        "Software Design (6.1040)",
        "Distributed Computer Systems Engineering (6.5840)",
        "Computer Systems Engineering (6.1800)",
        "Introduction to C & Assembly (6.1903)",
        "Web Programming & Competition (6.9620)",
      ],
    };

    return (
      <section id="coursework">
        <div className="container">
          <h1 className="coursework-title">Coursework</h1>
          {Object.entries(coursework).map(([category, courses]) => (
            <div key={category} className="mb-4">
              <h3>{category}</h3>
              <ul className="list-unstyled">
                {courses.map((course, i) => (
                  <li key={i} className="course-item">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Coursework;
