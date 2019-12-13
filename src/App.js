import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Popup from "./Popup";
import ExaltLadderDemo from "./img/exalt ladder.gif";

class App extends Component {
  makePopups = () => {
    let res = [];
    for (var i = 0; i < popups.length; i++) {
      res.push(
        <Popup
          demo={popups[i].demo}
          title={popups[i].title}
          body={popups[i].body}
        />
      );
      return res;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <About />
        <Portfolio />
        {this.makePopups(popups)}
      </div>
    );
  }
}

const popups = [
  {
    title: "Exalt Lader",
    demo: ExaltLadderDemo,
    body:
      "Displays character ranking and player information of top Path of Exile players."
  }
];

export default App;
