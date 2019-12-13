import React, { Component } from "react";
import "./Portfolio.css";
import FlipCard from "./FlipCard";
import city from "./img/city1.jpg";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <section className="section-portfolio" id="portfolio">
        <div className="row">
          <FlipCard
            image={city}
            title="Exalt Ladder"
            details={details}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam malesuada tempor. Etiam vulputate posuere enim ut viverra."
            backStyle={backStyle}
            btnText="demo"
          />
        </div>
      </section>
    );
  }
}

export default Portfolio;

const backStyle = {
  backgroundImage:
    "linear-gradient(to right bottom, #eca026, rgba(185, 19, 19, 0.911))"
};

const details = ["react", "JavaScript"];
