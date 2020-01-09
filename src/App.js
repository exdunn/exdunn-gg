import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
