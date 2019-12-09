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
      <section id="home" className="flex height-fix">
        <div className="canvas">
          <Particles params={particleOpt} />
          <div className="content">
            <span>Hello, I'm Alex Dunn, Software Engineer.</span>
          </div>
        </div>
        <Navigation />
      </section>
    );
  }
}

export default Header;
