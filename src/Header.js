import React, { Component } from "react";
import Particles from "react-particles-js";
import "./Header.css";

const particleOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    size: {
      value: 3
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
      <div className="canvas">
        <div className="content">
          <span>Hello, I'm Alex Dunn, a Software Engineer.</span>
        </div>
        <Particles params={particleOpt} />
      </div>
    );
  }
}

export default Header;
