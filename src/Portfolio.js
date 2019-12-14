import React, { Component } from "react";
import "./Portfolio.css";
import FlipCard from "./FlipCard";
import Pantheon from "./img/pantheon.jpg";

class Portfolio extends Component {
  makeFlipCards = () => {
    var res = [];
    for (var i = 0; i < flipCardObjs.length; i++) {
      res.push(
        <FlipCard
          title={flipCardObjs[i].title}
          image={flipCardObjs[i].image}
          details={flipCardObjs[i].details}
          backGradient={flipCardObjs[i].backGradient}
          btnName={flipCardObjs[i].btnName}
          text={flipCardObjs[i].text}
          textBackground={flipCardObjs[i].textBackground}
        />
      );
    }

    return res;
  };

  render() {
    return (
      <section className="section-portfolio" id="portfolio">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col">{this.makeFlipCards()}</div>
            <div className="col">{this.makeFlipCards()}</div>
            <div className="col">{this.makeFlipCards()}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

const flipCardObjs = [
  {
    title: "Exalt Ladder",
    image: {
      backgroundImage: `url(${Pantheon})`
    },
    details: ["React", "JavaScript", "Express", "Path of Exile API"],
    backGradient: {
      backgroundImage:
        "linear-gradient(0deg, rgba(46,14,105,.8) 0%, rgba(101,6,6,) 100%)"
    },
    btnName: "Demo",
    text:
      "Web app displaying player character info in Path of Exile. Orders characters by level and supports filtering by name, status, class, etc.",
    textBackground: {
      background:
        "linear-gradient(0deg, rgba(46,14,105,1) 0%, rgba(101,6,6,1) 100%)"
    }
  }
];
