import React, { Component } from "react";
import Github from "../../Photos/Videos/github.png";
import SQL from "../../Photos/Videos/sql.png";
import mongodb from "../../Photos/Videos/mongodb.png";
import flask from "../../Photos/Videos/flask.png";
import python from "../../Photos/Videos/python.png";
import javascript from "../../Photos/Videos/javascript.png";
import jquery from "../../Photos/Videos/jquery.png";
import Reacts from "../../Photos/Videos/react.png";
import css from "../../Photos/Videos/Css.png";
import html from "../../Photos/Videos/html.png";
import "./CSS/SkillsSlider.css";

class SkillsSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="backgroundAll">
        <h1 className="SkillsTitle">Skills</h1>

        <div className="sliderBackground">
          <div className="sliderDimensions">
            <div id="slider">
              <h1 className="frontendTools">Frontend Tools</h1>
              <figure>
                <img src={html} id="html" />
                <img src={css} id="css" />
                <img src={javascript} id="javascript" />
                <img src={jquery} id="jquery" />
                <img src={Reacts} id="react" />
              </figure>
            </div>
          </div>
          <div className="backendSliderDimensions">
            <div id="slider">
              <h1 className="frontendTools">Backend Tools</h1>
              <figure>
                <img src={python} id="python" />
                <img src={SQL} id="sql" />
                <img src={flask} id="flask" />
                <img src={mongodb} id="mongodb" />
                <img src={flask} id="flask" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSlider;
