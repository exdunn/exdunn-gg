import React, { Component } from "react";
import "./FlipCard.css";

class FlipCard extends Component {
  state = {};
  render() {
    return (
      <div className="card border-0">
        <div className="card-side front">
          <img className="card-img-top" src={this.props.image}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
        <div className="card-side back" style={this.props.backStyle}>
          <div className="card-body">back stuff</div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
