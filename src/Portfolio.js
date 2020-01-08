import React, { Component } from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import Popup from "./Popup";
import { projects } from "./data/data";

class Portfolio extends Component {
  state = { show: [] };

  componentDidMount() {
    this.setState({ show: projects.map(() => false) });
  }

  handleLearnClick = i => {
    const newShow = this.state.show;
    newShow[i] = true;
    this.setState({ show: newShow });
  };

  hangleToggle = i => {
    const newShow = this.state.show;
    newShow[i] = false;
    this.setState({ show: newShow });
  };

  makeFlipCards = () => {
    var res = [];
    for (var i = 0; i < projects.length; i++) {
      res.push(
        <div>
          <ProjectCard
            id={i}
            title={projects[i].title}
            backgroundImage={projects[i].backgroundImage}
            attributes={projects[i].attributes}
            text={projects[i].description}
            textBackground={projects[i].textBackground}
            onLearnClick={this.handleLearnClick}
          />
          <Popup
            id={i}
            show={this.state.show[i]}
            description={projects[i].description}
            title={projects[i].title}
            onToggle={this.hangleToggle}
            demo={projects[i].demo}
            visitUrl={projects[i].visitUrl}
            sourceUrl={projects[i].sourceUrl}
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
          <h2 className="title">Portfolio</h2>
          <div className="row">{this.makeFlipCards()}</div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
