import React, { Component } from "react";
import "./FlipCard.css";

class FlipCard extends Component {
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
            <a className="btn btn-light btn-lg" href="#popup">
              {this.props.btnName}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
