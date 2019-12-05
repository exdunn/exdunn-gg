import React, { Component } from "react";

import Background from "./img/triangles.jpg";
import "./Header.css";

const myStyles = {
  backgroundImage: `url(${Background})`,
  height: "80vh",
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return (
      <header style={myStyles}>
        <h1>{this.props.title}</h1>
        <p>A Free React Portfolio Tutorial</p>
        <a href="#button">{this.props.button}</a>
      </header>
    );
  }
}

export default Header;
