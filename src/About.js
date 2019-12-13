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
          link={iconObjs[i].link}
          title={iconObjs[i].title}
          description={iconObjs[i].description}
        />
      );
    }
    return res;
  };

  render() {
    return (
      <section className="section-about" id="about">
        <div className="container">
          <h2>About</h2>
          <div className="row">
            <div className="profile-pic">
              <img src={myPic} />
            </div>
            <div className="col profile-content-1">
              <h4>.NET Developer by Day</h4>
              <p className="paragraph">
                As a software engineer at
                <a href="https://www.meridianlink.com">MeridianLink</a>, I've
                gained firsthand experience developing backend APIs and working
                with clients to deliver software that best satisfies their
                requirements.
              </p>
              <h4>React Ninja by night</h4>
              <p className="paragraph">
                As a software engineer at
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
                <Skillbar name="Bootstrap" value="60%"></Skillbar>
                <Skillbar name="Unity" value="50%"></Skillbar>
              </div>
            </div>
          </div>
          <div className="row icons">{this.makeIcons(iconObjs)}</div>
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
      <div className="col icon-card">
        <span>
          <a href={this.props.link} target="_">
            <i className={this.props.image}></i>
          </a>
        </span>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

const iconObjs = [
  {
    image: "fab fa-github",
    link: "https://github.com/exdunn",
    title: "Responsive",
    description:
      "the cat in the hat is black but the orange tastes like cream soda."
  },
  {
    image: "far fa-file",
    link: "https://www.linkedin.com/in/alex-dunn-46766554/",

    title: "Responsive",
    description: "Looks great on any screen size!"
  },
  {
    image: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/alex-dunn-46766554/",
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
