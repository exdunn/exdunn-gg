import React, { Component } from "react";
import "./Skillbar.css";

class Skillbar extends Component {
  state = {};
  render() {
    return (
      <div className="skillbar" id={this.props.id}>
        <h4>{this.props.name}</h4>
        <div className="progress active">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Skillbar;
