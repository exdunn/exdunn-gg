import React, { Component } from "react";
import "./Skillbar.css";

class Skillbar extends Component {
  state = {};
  render() {
    return (
      <div className="skillbar container" id={this.props.id}>
        <div className="row skillbar-row">
          <div className="skillbar-name">{this.props.name}</div>
          <div className="progress active">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skillbar;
