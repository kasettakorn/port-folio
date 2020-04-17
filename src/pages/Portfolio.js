import React, { Component } from "react";
import scgLogo from '../images/scg-logo.jpg';
import { CheckCircleTwoTone, CodeTwoTone } from '@ant-design/icons';
import scgScreen1 from '../images/Picture1.png';
import scgScreen2 from '../images/Picture2.png';
import scgScreen3 from '../images/Picture3.png';
import '../styles/Portfolio.css'
import '../styles/Collapsible.css'
class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>PORTFOLIO</h1>
        <div className="row" style={{ marginTop: "30px" }}>

          <div className="col-12" id="product" style={{backgroundColor:"rgb(1, 46, 152)", padding:"30px"}}>
          <img src={scgLogo} alt="" width={200} style={{float:"left", padding:"10px"}} />

            <Collapsible title='Develop Health Surveillance Tracking System for SCG Chemicals '>
                <br/><br/><div> 
                    <span><p><CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize:"32px" }} /> Web application that tracking staff's checkup and follow by return to work policy.</p></span>
                    <span><p><CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize:"32px" }} /> Develop with ReactJS as frontend and .NET CORE (C#) as backend.</p></span>
                    <center>
                        <img src={scgScreen1} alt="" width={700} /><br/><br/>
                        <img src={scgScreen3} alt="" width={700} /><br/><br/>
                        <img src={scgScreen2} alt="" width={700} />
                    </center>      
                </div>
            </Collapsible>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-12" id="product" style={{backgroundColor:"rgb(1, 46, 152)", padding:"30px"}}>
            <Collapsible title='C++ Auto Judge '>
                <div> 
                    <span><p><CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize:"32px" }} /> Execute and rating code following problem for Algorithms courses.  </p></span>
                    <span><p><CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize:"32px" }} /> Develop with PHP.</p></span>
                    <center>
                    </center>      
                </div>
            </Collapsible>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>

          <div className="col-12" id="product" style={{backgroundColor:"rgb(1, 46, 152)", padding:"30px"}}>
            <Collapsible title='🇹🇭 Covid-19 Tracker'>
                <div> 
                    <span><p><CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize:"32px" }} /> Summary Coronavirus (Covid-19) in Thailand.  </p></span>
                    <span><p><CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize:"32px" }} /> Develop with ReactJS.</p></span>
                    <span><p><CodeTwoTone  style={{ fontSize:"32px" }} /> Demo: <a href="https://kasettakorn.github.io/covid19-summary/">https://kasettakorn.github.io/covid19-summary/</a></p></span>

                    <center>
                    </center>      
                </div>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
class Collapsible extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(){
        
    }

    render() {
      return (<div>
        <div onClick={(e)=>this.togglePanel(e)} className='header'>
            {this.props.title}<br/>{!this.state.open && <h3>See more...</h3>}</div>
        {this.state.open ? (
            <div className='content'>
                <br/>{this.props.children}
            </div>
            ) : null}
      </div>);
    }
  }
