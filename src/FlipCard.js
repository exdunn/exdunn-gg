import React, { Component } from "react";
import "./FlipCard.css";

class FlipCard extends Component {
  render() {
    return (
      <div className="card border-0">
        <div className="card-side front">
          <div className="card-picture">&nbsp;</div>
          <h4 className="card-heading">{this.props.title}</h4>
          <div class="card-details">
            <ul>
              {this.props.details.map(det => (
                <li>{det}</li>
              ))}
            </ul>
          </div>
          <img className="card-img-top" src={this.props.image}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.text}</p>
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
