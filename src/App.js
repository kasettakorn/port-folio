import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  HomeFilled,
  QuestionCircleFilled,
  CodeFilled,
  BookFilled,
} from "@ant-design/icons";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  handleCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Router>
        <Layout style={{height:"100vh"}}>
          <Sider
            width={250}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.handleCollapse}
          >
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys="home"
              style={{ height: "100%" }}
            >
              <Menu.Item key="home">
                <Link to="/" />
                <HomeFilled style={{ fontSize: "20px" }} />
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="About">
                <Link to="/about" />
                <QuestionCircleFilled style={{ fontSize: "20px" }} />
                <span>About</span>
              </Menu.Item>
              <Menu.Item key="Portfolio">
                <Link to="/portfolio" />
                <CodeFilled style={{ fontSize: "20px" }} />
                <span>Portfolio</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0, height:"10vh" }}
            >
              <span
                style={{ color: "white", fontSize: "50px", marginLeft: "10px", float:"left" }}
              >
                <BookFilled />Portfolio
              </span>
            </Header>
            <Content
              className="site-layout-background"
              style={{ margin: "24px 16px 0", overflowY:"scroll" }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </Content>
            <Content >
              <div
                className="site-layout-background"
              >
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
               ©2020 Created by Ronnakorn Hompoa
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
