import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    const pages = ["Home", "About", "Portfolio", "Contact"];
    const navLinks = pages.map(page => {
      return <a dest={"#" + page}>{page}</a>;
    });

    return (
      <nav>
        <div className="nav-wrap">{navLinks}</div>
      </nav>
    );
  }
}

export default Navigation;
