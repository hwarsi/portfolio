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
      <div>
        <h1>Skills</h1>

        <div className="box">
          <div className="skill">
            <img id="photo" src={html} />
            <div>HTML</div>
          </div>
          <div className="skill">
            <img id="photo" src={css} />
            <div>CSS</div>
          </div>
          <div className="skill">
            <img id="photo" src={jquery} />
            <div>Jquery</div>
          </div>
          <div className="skill">
            <img id="photo" src={javascript} />
            <div>Javascript</div>
          </div>
          <div className="skill">
            <img id="photo" src={Reacts} />
            <div>React</div>
          </div>
          <div className="skill">
            <img id="photo" src={python} />
            <div>Python</div>
          </div>
          <div className="skill">
            <img id="photo" src={flask} />
            <div>Flask</div>
          </div>
          <div className="skill">
            <img id="photo" src={mongodb} />
            <div>Mongodb</div>
          </div>
          <div className="skill">
            <img id="photo" src={SQL} />
            <div>PostgreSQL</div>
          </div>
          <div className="skill">
            <img id="photo" src={Github} />
            <div>Github</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
