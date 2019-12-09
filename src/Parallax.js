import React, { Component } from "react";
import "./Parallax.css";

import img1 from "./img/city1.jpg";
import img2 from "./img/city2.jpg";
import img3 from "./img/city3.jpg";

const imageStyles = [
  {
    backgroundImage: `url(${img1})`,
    height: "50vh"
  },
  {
    backgroundImage: `url(${img2})`,
    height: "50vh"
  },
  {
    backgroundImage: `url(${img3})`,
    height: "50vh"
  }
];

class Parallax extends Component {
  render() {
    return (
      <div className="container">
        <div className="pimg1" style={imageStyles[0]}>
          <div className="ptext">
            <span className="border">Parallax Website</span>
          </div>
        </div>
        <section className="section section-light">
          <h2>Section One</h2>
          <p>
            Sunt ea mollit irure minim. Esse sunt sunt Lorem nisi aliqua esse
            est occaecat minim exercitation. Deserunt reprehenderit duis elit
            irure anim incididunt quis sint. Ipsum sunt in occaecat minim ad
            excepteur mollit sunt incididunt. Enim mollit do deserunt laboris
            duis sunt nisi anim culpa. Ipsum magna culpa proident aliquip magna.
            Ad eiusmod laboris consequat sunt magna qui.
          </p>
        </section>

        <div className="pimg2" style={imageStyles[1]}>
          <div className="ptext">
            <span className="border">Image 2 Text</span>
          </div>
        </div>
        <section className="section section-dark">
          <h2>Section Two</h2>
          <p>
            Sunt ea mollit irure minim. Esse sunt sunt Lorem nisi aliqua esse
            est occaecat minim exercitation. Deserunt reprehenderit duis elit
            irure anim incididunt quis sint. Ipsum sunt in occaecat minim ad
            excepteur mollit sunt incididunt. Enim mollit do deserunt laboris
            duis sunt nisi anim culpa. Ipsum magna culpa proident aliquip magna.
            Ad eiusmod laboris consequat sunt magna qui.
          </p>
        </section>

        <div className="pimg3" style={imageStyles[2]}>
          <div className="ptext">
            <span className="border">Image 2 Text</span>
          </div>
        </div>
        <section className="section section-dark">
          <h2>Section Three</h2>
          <p>
            Sunt ea mollit irure minim. Esse sunt sunt Lorem nisi aliqua esse
            est occaecat minim exercitation. Deserunt reprehenderit duis elit
            irure anim incididunt quis sint. Ipsum sunt in occaecat minim ad
            excepteur mollit sunt incididunt. Enim mollit do deserunt laboris
            duis sunt nisi anim culpa. Ipsum magna culpa proident aliquip magna.
            Ad eiusmod laboris consequat sunt magna qui.
          </p>
        </section>
      </div>
    );
  }
}

export default Parallax;
