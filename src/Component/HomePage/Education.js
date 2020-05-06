import React, { Component } from "react";
import "./CSS/Education.css";
import clemson from "../../Photos/Videos/clemson.png";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="backgroundEducation">
        <h1 className="educationtitle">Education</h1>
        <div className="box">
          <div className="universityname">Clemson University</div>
          <div className="location">Clemson, SC</div>
          <div className="degree">B.S Economics</div>
          <div className="classes">
            <div className="classTitle">Relevant Classes</div>
            <img src={clemson} className="clemsonImage"></img>

            <div className="engineeringClasses">
              Calculus 1, Calculus 2,Calculus 3, Intro to Data Structures and
              Algorithms, Engineering Graphics and machine design, Linear
              Algebra, System Design 1, Operations Research, Production Planning
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
