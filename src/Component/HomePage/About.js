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
      <div className="aboutBackground">
        <div className="aboutMeBox">
          <h1 className="aboutMe">About Me</h1>
          <p className="aboutText">
            Its a pleasure meeting you. I am a full stack Software Engineer with
            a strong drive to learn and constantly challenge my skill-sets.
            Every day for me is a new opportunity for growth, and development. I
            love taking complex ideas and coming up with simplified and
            beautiful solutions. When I am not coding, you can probably find me
            working out, reading, or walking my dog.{" "}
          </p>
        </div>
        <div className="attributeContainer">
          <div className="myAttributes">
            <div className="icons">
              <FontAwesomeIcon icon={faLaptop} size="4x" className="Laptop" />
            </div>
            <p className="tagline">Responsive</p>
            <p className="description">
              {" "}
              My layouts will work on any device, big or small.
            </p>
          </div>

          <div className="myAttributes">
            <div className="icons">
              <FontAwesomeIcon
                icon={faLightbulb}
                size="4x"
                className="Lightbulb"
              />
            </div>
            <p className="tagline">Intuitive</p>
            <p className="description">
              Strong preference for easy to use, intuitive UX/UI. Websites don't
              have to be static, I love making pages come to life.
            </p>
          </div>

          <div className="myAttributes">
            <div className="icons">
              <FontAwesomeIcon icon={faRocket} size="4x" className="Rocket" />
            </div>
            <p className="tagline">Dynamic</p>
            <p className="description">
              {" "}
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>

          <div className="myAttributes">
            <div className="icons">
              <FontAwesomeIcon icon={faBath} size="4x" className="Bath" />
            </div>
            <p className="tagline">Clean</p>
            <p className="description">
              All my code is easy to read and takes moments to understand.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
