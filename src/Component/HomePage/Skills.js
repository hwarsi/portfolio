import React, { Component } from "react";
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
import "./CSS/Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skillsBackground">
        <div className="boxSkills">
          <h1 className="frontendtool">Frontend Tools</h1>
          <div className="frontend">
            <div className="skill">
              <img id="html" src={html} />
            </div>
            <div className="skill">
              <img id="css" src={css} />
            </div>
            <div className="skill">
              <img id="jquery" src={jquery} />
            </div>
            <div className="skill">
              <img id="javascript" src={javascript} />
            </div>
            <div className="skill">
              <img id="react" src={Reacts} />
            </div>
          </div>
          <h1 className="backendtool">Backend Tools</h1>
          <div className="backend">
            <div className="skill">
              <img id="python" src={python} />
            </div>
            <div className="skill">
              <img id="flask" src={flask} />
            </div>
            <div className="skill">
              <img id="mongodb" src={mongodb} />
            </div>
            <div className="skill">
              <img id="sql" src={SQL} />
            </div>
          </div>
          <h1 className="otherToolTitle">Other Tools</h1>
          <div className="otherTools">
            <img id="github" src={Github} />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
