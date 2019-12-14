import React, { Component } from "react";
import "./FlipCard.css";

class FlipCard extends Component {
  render() {
    return (
      <div className="card border-0">
        <div className="card-side front">
          <div className="card-picture" style={this.props.backgroundImage}>
            &nbsp;
          </div>
          <h5 className="card-heading">
            <span>{this.props.title}</span>
          </h5>
          <div className="card-details">
            <ul>
              {this.props.details.map(det => (
                <li>{det}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-side back" style={this.props.backStyle}>
          <div className="card-body">
            <h3>back stuff</h3>
            <a className="btn btn-light btn-lg" href="#popup">
              {this.props.btnText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
