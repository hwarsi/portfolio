import React, { Component } from "react";
import "./CSS/Projects.css";
import DevSpot from "../../Photos/Videos/DevSpot.png";
import portfolio from "../../Photos/Videos/portfolio.png";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="backgroundProjects">
        <h1 className="SectionTitle">Projects</h1>

        <div className="Projects">
          <div className="ProjectBox">
            <h1 className="ProjectTitle">Social Media App</h1>
            <img src={DevSpot} className="ProjectImage"></img>
            <div className="ProjectPoints">
              <div className="ProjectTagline">How was it built?</div>
              <ul>
                <li className="ProjectDescription">
                  Used React to create Functional Components.
                </li>
                <li className="ProjectDescription">
                  Created functions to perform CRUD operations to update MongoDB
                  database.
                </li>
                <li className="ProjectDescription">
                  Created a notification feature where users will be alerted if
                  a user posts on their wall or requests to add them as a
                  friend.
                </li>
                <li className="ProjectDescription">
                  Used OAuth 2.0 to authenticate users.
                </li>
              </ul>
            </div>
          </div>

          <div className="ProjectBox">
            <h1 className="ProjectTitle">Portfolio</h1>
            <img src={portfolio} className="ProjectImage"></img>
            <div className="ProjectPoints">
              <div className="ProjectTagline">How was it built?</div>
              <ul>
                <li className="ProjectDescription">
                  Used React to create functional components.{" "}
                </li>
                <li className="ProjectDescription">
                  Used Restful APIs to create weather widget.{" "}
                </li>
                <li className="ProjectDescription">
                  Used Python and Axios to add contact info to MongoDB.{" "}
                </li>
                <li className="ProjectDescription">
                  Deployed application to google cloud.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
