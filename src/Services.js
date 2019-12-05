import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>Services</h3>
        <h2>What We Offer</h2>

        <div className="row">
          <div>
            <span>
              <i className="fas fa-mobile"></i>
            </span>
            <h4>Responsive</h4>
            <p>Looks great on any screen size.</p>
          </div>
          <div>
            <span>
              <i class="fas fa-thumbs-up"></i>
            </span>
            <h4>Responsive</h4>
            <p>Looks great on any screen size.</p>
          </div>
          <div>
            <span>
              <i className="fas fa-pencil-alt"></i>
            </span>
            <h4>Responsive</h4>
            <p>Looks great on any screen size.</p>
          </div>
          <div>
            <span>
              <i className="fas fa-question-circle"></i>
            </span>
            <h4>Responsive</h4>
            <p>
              Looks great on <i class="fas fa-heart"></i> any screen size.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
