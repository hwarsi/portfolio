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
        <figure id="slider">
          <img src={html} id="html"></img>
          <img src={css} id="css"></img>
          <img src={jquery} id="jquery"></img>
          <img src={javascript} id="javascript"></img>
          <img src={Reacts} id="react"></img>
        </figure>
      </div>
    );
  }
}

export default Skills;
