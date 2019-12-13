import React, { Component } from "react";
import Particles from "react-particles-js";
import "./Header.css";
import Navigation from "./Navigation";

const particleOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 700
      }
    },
    size: {
      value: 5
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

class Header extends Component {
  render() {
    return (
      <section id="header">
        <div className="canvas">
          <Particles params={particleOpt} />
          <div className="textbox">
            <h1 className="heading-primary">
              <span className="heading-primary-main"> Alex Dunn</span>
              <span className="heading-primary-sub">Software Engineer</span>
            </h1>
          </div>
        </div>
        <Navigation />
      </section>
    );
  }
}

export default Header;
