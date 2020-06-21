import React, { Component } from "react";
import "./CSS/Overall.css";
import marketing from "../../Photos/Videos/marketing.jpeg";
import codeing from "../../Photos/Videos/coding.jpeg";
import internship from "../../Photos/Videos/internship.jpeg";
import engineering from "../../Photos/Videos/engineering.jpeg";

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Jobs: [
        {
          card: "card1",
          Job: "Software Engineer (Remote)",
          date: "August 2018 - Present",
          Company: "My Value Media",
          image: codeing,
          description: [
            "Utilized React to create responsive marketing platforms that included landing pages, and analytics dashboards for clients.",
            "Developed RESTful api’s using Python (Flask) and MongoDB for our database.",
            "Collaborated with a small agile engineering team.",
            "Created unit tests before deploying applications to Google Cloud.",
            "Project: Developed a jewelry eCommerce web app for one of our clients.",
          ],
        },
        {
          card: "card2",
          Job: "Software Engineer Intern",
          date: "May 2019 - August 2019",
          Company: "Redhype",
          image: internship,
          description: [
            "Collaborated with designers to create clean interfaces and simple, intuitive interactions and experiences using React.",
            "Pair-Programmed with Senior Engineers to work-on backend services with Python.",
            "Project: Made an application to help recruiting companies find engineering candidates.",
          ],
        },
        {
          card: "card3",
          Job: "Software Engineer Intern",
          date: "January 2018 - May 2018",
          Company: "Bosch Rexroth",
          image: engineering,
          description: [
            "Was responsible for QA testing, fixing bugs with jQuery and Python.",
            "Responsible for inspecting out of spec parts for quality issues.",
            "Project: Helped write a responsive web app to quickly pull up vendors, part quotations and specifications.",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="backgroundResume">
        <div className="experience">Experience</div>

        <div className="WholeCard">
          {this.state.Jobs.map((item) => (
            <div className="allCards">
              <img src={item.image} id="card-image"></img>
              <div className="Company">{item.Company}</div>
              <div id="card-text">
                <div className="pushDateDown"></div>
                <span id="date">{item.date}</span>
                <h2 className="jobs">{item.Job}</h2>
                {item.description.map((items) => (
                  <ul>
                    <li>{items}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Resume;
