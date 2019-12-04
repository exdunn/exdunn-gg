import React, { Component } from "react";

// import "./App.css";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    const pages = ["Home", "About", "Services", "Portfolio", "Contact"];
    const navLinks = pages.map(page => {
      return (
        <li>
          <a href={"#" + page}>{page}</a>
        </li>
      );
    });

    return (
      <nav>
        <h2 className="logo">{this.props.title}</h2>
        <ul>{navLinks}</ul>
      </nav>
    );
  }
}

export default Navigation;
