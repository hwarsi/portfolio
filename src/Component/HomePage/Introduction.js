import React, { Component } from "react";
import "./CSS/Video.css";
import { Button } from "antd";

class Introduction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="banner">
        <video autoPlay muted loop id="video">
          <source
            src="https://storage.coverr.co/videos/eE026x1b6h1v01p001I9O2zflmESo00zMR01s?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg4NjE4ODAyfQ.LuJvkWPSvZlHsaRP_iCse8-pgCK5rTZFUGW9bANnTdY"
            type="video/mp4"
            style={{ height: "100px" }}
          ></source>
        </video>
        <div className="content">
          <h1>Nice to meet you!</h1>
          <p>My name is Haris. I'm a full stack developer.</p>
        </div>
      </div>
    );
  }
}

export default Introduction;
