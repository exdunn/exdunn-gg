import React, { Component } from "react";
import "./About.css";
import myPic from "./img/food.jpg";
import $ from "jquery";

class About extends Component {
  makeIcons = () => {
    let res = [];
    for (var i = 0; i < iconObjs.length; i++) {
      res.push(
        <IconCard
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
      <section className="section-about">
        <div className="container">
          <h2>About</h2>
          <div className="row">
            <div className="profile-pic">
              <img src={myPic} />
            </div>
            <div className="col profile-content-1">
              <h4>Motivated to deliver quality software</h4>
              <p className="paragraph">
                As a software engineer at{" "}
                <a href="https://www.meridianlink.com">MeridianLink</a>, I've
                gained firsthand experience developing backend APIs and working
                with clients to deliver software that best satisfies their
                requirements.
              </p>
            </div>
            <div className="col profile-content-2">
              <div className="skillbars">
                <Skillbar name="C# / VB.NET" value="75%"></Skillbar>
                <Skillbar name="Python" value="70%"></Skillbar>
                <Skillbar name="JavaScript" value="70%"></Skillbar>
                <Skillbar name="React" value="70%"></Skillbar>
                <Skillbar name="CSS" value="60%"></Skillbar>
                <Skillbar name="Bootstrap" value="50%"></Skillbar>
                <Skillbar name="Unity" value="50%"></Skillbar>
              </div>
            </div>
          </div>
          <div className="row">{this.makeIcons(iconObjs)}</div>
        </div>
      </section>
    );
  }
}

export default About;

class Skillbar extends Component {
  render() {
    return (
      <div className="skillbar">
        <h4>{this.props.name}</h4>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: this.props.value }}
          ></div>
        </div>
      </div>
    );
  }
}

class IconCard extends Component {
  state = {};
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

const iconObjs = [
  {
    image: "fas fa-question-circle",
    title: "Responsive",
    description:
      "the cat in the hat is black but the orange tastes like cream soda."
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

function isElementInViewport(elem) {
  var $elem = $(elem);

  var scrollTop = $(window).scrollTop();
  var scrollBottom = scrollTop + $(window).height();
  // Get the scroll position of the page.)
  var scrollElem =
    navigator.userAgent.toLowerCase().indexOf("webkit") != -1 ? "body" : "html";
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();
  // console.log(elemTop, viewportBottom, elemBottom, viewportTop);
  return elemTop < scrollBottom - 100 && elemBottom > scrollTop;
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $(".profile-content-2");

  // If the animation has already been started
  if ($elem.hasClass("start")) return;

  if (isElementInViewport($elem)) {
    // Start the animation
    $elem.addClass("start");
  }
}

// Capture scroll events
$(window).scroll(function() {
  checkAnimation();
});
