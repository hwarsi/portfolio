import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import "./CSS/About.css";
import haris from "../../Photos/Videos/haris.JPG";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Who is he?</h1>
          <img src={haris} className="profile"></img>
          <p className="profiletext">
            I am a full stack Software Engineer. have a strong drive to learn
            and constantly challenge my skill-sets. Every day for me is a new
            opportunity for growth, and development.{" "}
          </p>
        </div>
        <div className="container">
          <div className="icons">
            <FontAwesomeIcon icon={faLaptop} size="4x" className="Laptop" />
          </div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faLightbulb}
              size="4x"
              className="Lightbulb"
            />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faRocket} size="4x" className="Rocket" />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faBath} size="4x" className="Bath" />
          </div>
        </div>
        <div className="textTitle">
          <div className="responsive">Responsive</div>
          <div className="intuitive">Intuitive</div>
          <div className="dynamic">Dynamic</div>
          <div className="clean">Clean</div>
        </div>
        <div className="rowflex">
          <div className="descriptionresponsive">
            <p className="responsivetext">
              My layouts will work on any device, big or small.
            </p>
          </div>
          <div className="descriptionintuitive">
            <p className="intuitivetext">
              Strong preference for easy to use, intuitive UX/UI. Websites don't
              have to be static, I love making pages come to life.
            </p>
          </div>
          <div className="descriptiondynamic">
            <p className="textdynamic">
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
          <div className="descriptionclean">
            <p className="textclean">
              All my code is easy to read and takes moments to understand.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
