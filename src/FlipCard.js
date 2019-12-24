import React, { Component } from "react";
import "./FlipCard.css";

class FlipCard extends Component {
  getDemoButton() {
    if (this.props.hasDemo) {
      return (
        <a
          className="btn btn-light btn-lg"
          href={"#popup-" + this.props.popupIndex}
        >
          Demo
        </a>
      );
    }
  }

  getSourceButton() {
    if (this.props.hasSource) {
      return (
        <a className="btn btn-light btn-lg" href={this.props.sourceUrl}>
          Source
        </a>
      );
    }
  }

  getVisitButton() {
    if (this.props.hasVisit) {
      return (
        <a className="btn btn-light btn-lg" href={this.props.visitUrl}>
          Visit
        </a>
      );
    }
  }

  render() {
    return (
      <div className="card border-0">
        <div className="card-side front">
          <div className="card-picture" style={this.props.image}>
            &nbsp;
          </div>
          <h5 className="card-heading">
            <span style={this.props.textBackground}>{this.props.title}</span>
          </h5>
          <div className="card-details">
            <ul>
              {this.props.details.map(det => (
                <li>{det}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-side back" style={this.props.backGradient}>
          <div className="card-body">
            <div className="card-description">
              <p>{this.props.text}</p>
            </div>
            {this.getDemoButton()}
            {this.getVisitButton()}
            {this.getSourceButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
