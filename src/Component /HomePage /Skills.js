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
        <h1>Tools I use</h1>

        <div className="boxSkills">
          <div className="frontend">
            <div className="skill">
              <img id="html" src={html} />
              <div>HTML</div>
            </div>
            <div className="skill">
              <img id="css" src={css} />
              <div>CSS</div>
            </div>
            <div className="skill">
              <img id="jquery" src={jquery} />
              <div>Jquery</div>
            </div>
            <div className="skill">
              <img id="javascript" src={javascript} />
              <div>Javascript</div>
            </div>
            <div className="skill">
              <img id="react" src={Reacts} />
              <div>React</div>
            </div>
          </div>

          <div className="backend">
            <div className="skill">
              <img id="python" src={python} />
              <div>Python</div>
            </div>
            <div className="skill">
              <img id="flask" src={flask} />
              <div>Flask</div>
            </div>
            <div className="skill">
              <img id="mongodb" src={mongodb} />
              <div>Mongodb</div>
            </div>
            <div className="skill">
              <img id="sql" src={SQL} />
              <div>PostgreSQL</div>
            </div>
            <div className="skill">
              <img id="github" src={Github} />
              <div>Github</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
