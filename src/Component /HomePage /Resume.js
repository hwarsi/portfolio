import React, { Component } from "react";
import "./CSS/Overall.css";
class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Jobs: [
        {
          Job: "Marketing Coordinator",
          date: "Febuary 2020 - Present",
          Company: "Southern Management Corporation",
          description: [
            "	Coordinates activities to promote develop, execute and launch marketing efforts.",
            " Collaborates with branches and leadership to develop plans to drive business and meet company goals.",
            "Partner with teams throughout the company and with vendors to launch marketing efforts.",
            " Recommends and helps implement processes for programs such as direct mail, email, text and social.",
          ],
        },
        {
          Job: "Software Engineer (Remote)",
          date: "August 2018 - January 2020",
          Company: "My Value Media",
          description: [
            "Utilized React, CSS, Flexbox and APIS to create landing pages for clients. ",
            "Developed back end services using Python (Flask), MongoDB for our databases.",
            "Held weekly meetings with clients to share status reports on current development.",
            "Created marketing strategy for BoxDrop Furniture Anderson that yielded a 45% increase in sales in two months.",
            "Worked in an Agile Scrum Team creating complex webpages for our existing clients.",
          ],
        },
        {
          Job: "Digital Marketing Intern",
          date: "May 2019 - August 2019",
          Company: "Redhype",
          description: [
            "Deployed Applications on Google Cloud.",
            "Used RESTful services for Single-Sign-On authentication.",
            "Analyzed data and market research to find insights for Redhypes clients’ competition.",
          ],
        },
        {
          Job: "Purchasing Engineer",
          date: "January 2019 - May 2019",
          Company: "Bosch Rexroth",
          description: [
            "Worked with ten external parts suppliers on parts quotations, return parts and specification updates",
            "Responsible for inspecting out of spec parts for quality issues",
            "Collaborated with ten parts suppliers, supply chain and parts availability",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.Jobs.map((item) => (
          <div id="card">
            <div id="card-image"></div>
            <div id="card-text">
              <span id="date">{item.date}</span>
              <h2>{item.Job}</h2>
              {item.description.map((items) => (
                <ul>
                  <li>{items}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Resume;
