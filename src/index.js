import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Services from "./Services";
import Parallax from "./Parallax";
import Canvas from "./Canvas";
import * as serviceWorker from "./serviceWorker";

// #dab0fc light violet
// #70ffec light teal
// #87ceeb sky blue
// #1d809f sea blue

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
