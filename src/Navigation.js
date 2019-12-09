import React, { Component } from "react";

// import "./App.css";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    const pages = ["Home", "About", "Portfolio", "Contact"];
    const navLinks = pages.map(page => {
      return (
        <li className="label">
          <a className="navLink" href={"#" + page}>
            {page}
          </a>
        </li>
      );
    });

    return (
      <nav>
        <ul>{navLinks}</ul>
      </nav>
    );
  }
}

export default Navigation;
