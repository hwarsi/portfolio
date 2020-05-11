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
        <h1 className="ProjectTitle">Projects</h1>
        <div className="differentTitles">
          <h1 className="DevSpotTitle">Social Media App</h1>
          <h1 className="Portfolio">Portfolio</h1>
        </div>
        <div className="projectImages">
          <img src={DevSpot} className="DevSpotImage"></img>
          <img src={portfolio} className="portfolioImage"></img>
        </div>

        <div className="projectImages"></div>
        <div className="allDescriptions">
          <div className="DevSpot">
            <div className="DevGroupDescription">
              <div className="howDevSpot">How was it built?</div>
              <li className="DevSpotDescription">
                Used Restful APIs to get users data.
              </li>
              <li className="DevSpotDescription">
                Used React to create functional Components.
              </li>
              <li className="DevSpotDescription">
                Use python routes and axios to utilize API's data.
              </li>
              <li className="DevSpotDescription">
                Used GET and POST to update MongoDB data base on comments and
                posts being posted or deleted.
              </li>
              <li className="DevSpotDescription">
                Created a notification feature where users will be alerted if a
                user posts on their wall or requests to add them as a friend.
              </li>
              <li className="DevSpotDescription">
                Used OAuth 2.0 to authenticate users.
              </li>
            </div>
          </div>
          <div className="portfolioSection">
            <ul className="ProfileHow">How was it built?</ul>
            <li className="PortfolioDesription">
              Used React to create functional components.{" "}
            </li>
            <li className="PortfolioDesription">
              Used Restful APIs to create weather widget.{" "}
            </li>
            <li className="PortfolioDesription">
              Used Python and Axios to add contact info to MongoDB.{" "}
            </li>
            <li className="PortfolioDesription">
              Deployed application to google cloud
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
