import React, { Component } from "react";
import "./CSS/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        <div className="box">
          <div>Clemson University</div>
          <div>Clemson, SC</div>
          <div>B.S Economics</div>
        </div>
      </div>
    );
  }
}

export default Education;
