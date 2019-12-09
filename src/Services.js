import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  makeIcons = () => {
    let res = [];
    for (var i = 0; i < iconObjs.length; i++) {
      res.push(
        <Icon
          image={iconObjs[i].image}
          title={iconObjs[i].title}
          description={iconObjs[i].description}
        />
      );
    }
    return res;
  };

  render() {
    return (
      <div className="services">
        <h3>Services</h3>
        <h2>What We Offer</h2>
        <div className="row">{this.makeIcons(iconObjs)}</div>
      </div>
    );
  }
}

const iconObjs = [
  {
    image: "fas fa-question-circle",
    title: "Responsive",
    description: "Looks great on any screen size!"
  },
  {
    image: "fas fa-question-circle",
    title: "Responsive",
    description: "Looks great on any screen size!"
  },
  {
    image: "fas fa-question-circle",
    title: "Responsive",
    description: "Looks great on any screen size!"
  },
  {
    image: "fas fa-question-circle",
    title: "Responsive",
    description: "Looks great on any screen size!"
  }
];

class Icon extends Component {
  render() {
    return (
      <div>
        <span>
          <i className={this.props.image}></i>
        </span>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Services;
