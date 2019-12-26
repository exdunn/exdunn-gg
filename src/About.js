import React, { Component } from "react";
import "./About.css";
import myPic from "./img/profile.jpg";
import Skillbar from "./Skillbar";
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
        />
      );
    }
    return res;
  };

  makeSkillbars = () => {
    let res = [];
    for (var i = 0; i < skillbarObjs.length; i++) {
      res.push(
        <Skillbar name={skillbarObjs[i].name} value={skillbarObjs[i].value} />
      );
    }
    return res;
  };

  render() {
    return (
      <section className="section-about" id="about">
        <div className="container">
          <h2 className="title">About</h2>
          <div className="row">
            <div className="col profile-pic">
              <img src={myPic} />
            </div>
            <div className="col profile-content-1">
              <h4>.NET Developer by Day</h4>
              <p className="paragraph">
                As a software engineer at
                <a href="https://www.meridianlink.com"> MeridianLink</a>, I've
                gained firsthand experience developing backend APIs and working
                with clients to deliver software that best satisfies their
                requirements.
              </p>
              <h4>React Ninja by night</h4>
              <p className="paragraph">
                Passionate about leveraging modern frameworks and creating an
                awesome user experience.
              </p>
            </div>
            <div className="col profile-content-2">
              <div className="skillbars">{this.makeSkillbars()}</div>
            </div>
          </div>
          <div className="row icons">{this.makeIcons()}</div>
        </div>
      </section>
    );
  }
}

export default About;

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
      </div>
    );
  }
}

const iconObjs = [
  {
    image: "fab fa-github",
    link: "https://github.com/exdunn",
    title: "Collaborative",
    description:
      "the cat in the hat is black but the orange tastes like cream soda."
  },
  {
    image: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/alex-dunn-46766554/",
    title: "Connected",
    description: "Looks great on any screen size!"
  },
  {
    image: "far fa-file",
    link: "https://www.linkedin.com/in/alex-dunn-46766554/",

    title: "Experienced",
    description: "Looks great on any screen size!"
  }
];

const skillbarObjs = [
  { name: "C# / VB.Net", value: "80%" },
  { name: "JavaScript", value: "80%" },
  { name: "Python", value: "75%" },
  { name: "React", value: "70%" },
  { name: "Node", value: "60%" },
  { name: "Bootstrap / CSS", value: "70%" },
  { name: "MongoDB", value: "60%" }
];

// checks whether the top/bottom of target in element is on the screen
function isElementInViewport(elem, yOffset) {
  var $elem = $(elem);

  var scrollTop = $(window).scrollTop();
  var scrollBottom = scrollTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();
  return elemTop < scrollBottom - yOffset && elemBottom > scrollTop;
}

function startAnimation() {
  var $elem_title = $(".container > .title");
  var $elem_pic = $(".profile-pic");
  var $elem_1 = $(".profile-content-1");
  var $elem_2 = $(".profile-content-2");

  if (!$elem_title.hasClass("start") && isElementInViewport($elem_title, 100)) {
    $elem_title.addClass("start");
  }

  if (!$elem_pic.hasClass("start") && isElementInViewport($elem_pic, 175)) {
    $elem_pic.addClass("start");
  }

  if (!$elem_1.hasClass("start") && isElementInViewport($elem_1, 175)) {
    $elem_1.addClass("start");
  }

  if (!$elem_2.hasClass("start") && isElementInViewport($elem_2, 175)) {
    $elem_2.addClass("start");
    $(".skillbars .skillbar > .progress > .progress-bar").each(function(i) {
      $(this).width(skillbarObjs[i].value);
    });
  }
}

$(window).scroll(function() {
  startAnimation();
});
