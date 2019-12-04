import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Navigation from "./Navigation";
import Header from "./Header";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation title="Exdunn Portfolio" />
        <Header title="Portfolio" button="Find Out More" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
