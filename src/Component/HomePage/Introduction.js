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
            src="https://assets.mixkit.co/videos/preview/mixkit-matterhorn-mountain-landscape-4281-large.mp4"
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
