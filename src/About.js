import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <section id="about">
        <div className="container flex">
          <div
            class="header waypoint animated slide-in-left"
            data-animation="slide-in-left"
          >
            ABOUT
          </div>
        </div>
      </section>
    );
  }
}

export default About;
