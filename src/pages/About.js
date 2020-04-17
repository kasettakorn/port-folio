import React, { Component } from "react";

import "antd/dist/antd.css";
import "../styles/About.css";
class About extends Component {

  handleClick = () => {
    this.props.history.push("/portfolio");
  };

  render() {
    return (
      <div className="container">
        <div className="hero-image">
          <div className="hero-text">
            <h1 style={{ fontSize: "50px", color: "white" }}>
              I am Ronnakorn Hompoa
            </h1>
            <p>I'm a Frontend Developer</p>
          </div>
        </div>
        <div className="row" style={{marginTop:"30px"}}>
            <div className="col-12" id="main">
              Bachelor's Degrees of Computer Sciences<br/>
              King Mongkut's University of Technology North Bangkok
            </div>
        </div>
      </div>
    );
  }
}

export default About;
