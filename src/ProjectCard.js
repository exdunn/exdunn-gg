import React, { Component } from "react";
import "./ProjectCard.css";

class ProjectCard extends Component {
  render() {
    return (
      <div className="card border-0">
        <div className="card-body">
          <div
            className="card-background"
            style={{
              backgroundImage: this.props.backgroundImage,
              backgroundSize: "cover"
            }}
          ></div>
          <div className="card-top">
            <div className="card-title bold">{this.props.title}</div>
            <div className="card-attributes">
              {"{ " + this.props.attributes.join(" + ") + " }"}
            </div>
          </div>
          <div className="card-bot">
            <div
              className="button bottom-btn"
              onClick={() => this.props.onLearnClick(this.props.id)}
            >
              learn more
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
