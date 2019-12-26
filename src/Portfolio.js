import React, { Component } from "react";
import "./Portfolio.css";
import FlipCard from "./FlipCard";
import Pantheon from "./img/pantheon.jpg";

class Portfolio extends Component {
  makeFlipCards = () => {
    var res = [];
    for (var i = 0; i < flipCardObjs.length; i++) {
      res.push(
        <div className="col">
          <FlipCard
            title={flipCardObjs[i].title}
            image={flipCardObjs[i].image}
            details={flipCardObjs[i].details}
            backGradient={flipCardObjs[i].backGradient}
            btnName={flipCardObjs[i].btnName}
            text={flipCardObjs[i].text}
            textBackground={flipCardObjs[i].textBackground}
            hasDemo={flipCardObjs[i].hasDemo}
            popupIndex={flipCardObjs[i].popupIndex}
            hasSource={flipCardObjs[i].hasSource}
            sourceUrl={flipCardObjs[i].sourceUrl}
            hasVisit={flipCardObjs[i].hasVisit}
            visitUrl={flipCardObjs[i].visitUrl}
          />
        </div>
      );
    }
    return res;
  };

  render() {
    return (
      <section className="section-portfolio" id="portfolio">
        <div className="container">
          <h2 className="title">Projects</h2>
          <div className="row">{this.makeFlipCards()}</div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

const flipCardObjs = [
  {
    title: "Patch Notes When?",
    image: {
      backgroundImage: `url(${Pantheon})`
    },
    details: ["React", "Node", "MongoDB", "Google Cloud", "Python"],
    backGradient: {
      backgroundImage:
        "linear-gradient(0deg, rgba(46,14,105,.8) 0%, rgba(101,6,6,.8) 100%)"
    },
    text:
      "Crawls pathofexile.com forum for new patch notes and makes them mobile friendly.",
    textBackground: {
      background:
        "linear-gradient(0deg, rgba(46,14,105,1) 0%, rgba(101,6,6,1) 100%)"
    },
    hasDemo: false,
    hasSource: true,
    sourceUrl: "https://github.com/exdunn/patchnoteswhen",
    hasVisit: true,
    visitUrl: "https://www.patchnoteswhen.com"
  },
  {
    title: "Exalt Ladder",
    image: {
      backgroundImage: `url(${Pantheon})`
    },
    details: ["React", "JavaScript", "Express", "Path of Exile API"],
    backGradient: {
      backgroundImage:
        "linear-gradient(0deg, rgba(46,14,105,.8) 0%, rgba(101,6,6,.8) 100%)"
    },
    text:
      "Leaderboard displaying character info from Path of Exile. Orders characters by level and supports filtering by name, status, class, etc.",
    textBackground: {
      background:
        "linear-gradient(0deg, rgba(46,14,105,1) 0%, rgba(101,6,6,1) 100%)"
    },
    hasDemo: true,
    popupIndex: "0",
    hasSource: false,
    sourceUrl: "",
    hasVisit: false,
    visitUrl: ""
  },
  {
    title: "Exalt Ladder",
    image: {
      backgroundImage: `url(${Pantheon})`
    },
    details: ["React", "JavaScript", "Express", "Path of Exile API"],
    backGradient: {
      backgroundImage:
        "linear-gradient(0deg, rgba(46,14,105,.8) 0%, rgba(101,6,6,.8) 100%)"
    },
    text:
      "Leaderboard displaying character info from Path of Exile. Orders characters by level and supports filtering by name, status, class, etc.",
    textBackground: {
      background:
        "linear-gradient(0deg, rgba(46,14,105,1) 0%, rgba(101,6,6,1) 100%)"
    }
  }
];
