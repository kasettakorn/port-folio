import React, { Component } from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
import "../styles/Home.css";
class Home extends Component {

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
        <div className="col-4">
            <h2>TECHNICAL SKILLS</h2>
          </div>
          <div className="col-8" id="skill">
            <div className="row">
              <div className="col">
                  <h4>Website Development</h4>
                  HTML<Progress percent={70} />
                  JavaScript<Progress percent={65} />
                  ReactJS<Progress percent={70} />
                  PHP<Progress percent={70} />
                  ASP.NET(C#)<Progress percent={50} />
                  Database (MySQL, SQL Server)<Progress percent={50} />                
              </div>
              <div className="col">
              <h4>Machine Learning Development</h4>
                  Python<Progress percent={70} />
                  Keras / SciKit Learn<Progress percent={60} />
                  Statistic<Progress percent={30} />  
              </div>
            </div>
            <div className="row">
              <div className="col">
                  <h4>Mobile Development</h4>
                    Flutter<Progress percent={60} />
                    Java<Progress percent={50} />             
              </div>
              <div className="col">
                  <h4>Other programming skills</h4>
                  C, C++<Progress percent={80} />
                  Dart<Progress percent={60} />
                  UML<Progress percent={65} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
