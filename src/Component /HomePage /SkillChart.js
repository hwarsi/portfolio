import React, { Component } from "react";
import "./CSS/SkillChart.css";
import Github from "../../Photos/Videos/github.png";
import SQL from "../../Photos/Videos/PostgreSQL.png";
import mongodb from "../../Photos/Videos/mongodb.png";
import flask from "../../Photos/Videos/flask.png";
import python from "../../Photos/Videos/python.png";
import javascript from "../../Photos/Videos/javascript.png";
import jquery from "../../Photos/Videos/jquery.png";
import Reacts from "../../Photos/Videos/react.png";
import css from "../../Photos/Videos/Css.png";
import html from "../../Photos/Videos/html.png";

class SkillChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapeverything">
        <div className="wrapperBox">
          <div className="wrapper">
            <h1>Skill Chart</h1>
            <h2>HTML / CSS</h2>
            <div className="line line1">90%</div>
            <h2>JAVASCRIPT</h2>
            <div className="line line2">85%</div>
            <h2>REACT</h2>
            <div className="line line3">95%</div>
            <h2>PYTHON</h2>
            <div className="line line4">80%</div>
            <h2>PostgreSQL</h2>
            <div className="line line5">75%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillChart;
