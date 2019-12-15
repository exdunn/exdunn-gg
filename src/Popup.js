import React, { Component } from "react";
import "./Popup.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
  }

  render() {
    return (
      <div className="popup" id="popup">
        <div className="popup-content">
          <div className="popup-left">
            <a href="#portfolio">
              <img src={this.props.demo} class="popup-image"></img>
            </a>
          </div>
          <div className="popup-right">
            <a href="#portfolio" class="popup-close">
              ×
            </a>
            <h3 className="popup-header">{this.props.title}</h3>
            <p>{this.props.body}</p>
            <a className="btn btn-light btn-lg" href={this.props.link}>
              {this.props.btnName}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
