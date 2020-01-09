import React, { Component } from "react";
import "./About.css";
import myPic from "./res/profile.jpg";
import Skillbar from "./Skillbar";
import $ from "jquery";
import { icons, skills } from "./data/data";

class About extends Component {
  makeIcons = () => {
    let res = [];
    for (var i = 0; i < icons.length; i++) {
      res.push(
        <Flair
          image={icons[i].image}
          link={icons[i].link}
          title={icons[i].title}
        />
      );
    }
    return res;
  };

  makeSkillbars = () => {
    let res = [];
    for (var i = 0; i < skills.length; i++) {
      res.push(<Skillbar name={skills[i].name} value={skills[i].value} />);
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

            <div className="col-6 profile-content-2">
              <div className="skillbars">{this.makeSkillbars()}</div>
            </div>
          </div>
          <div className="row summary">
            <div className="col">
              <h4>.NET by Day</h4>
              <p className="paragraph">
                As a software engineer at
                <a href="https://www.meridianlink.com"> MeridianLink</a>, I've
                gained experience developing credit union software at an
                established industry leader.
              </p>
            </div>

            <div className="col">
              <h4>React by night</h4>
              <p className="paragraph">
                I'm passionate about leveraging modern frameworks and libraries
                to create an awesome user experience.
              </p>
            </div>
          </div>
          <div className="row icons">{this.makeIcons()}</div>
        </div>
      </section>
    );
  }
}

export default About;

class Flair extends Component {
  state = {};
  render() {
    return (
      <div className="col icon-card">
        <span>
          <a href={this.props.link} target="_">
            <i className={this.props.image}></i>
          </a>
        </span>
      </div>
    );
  }
}

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
  // var $elem_1 = $(".profile-content-1");
  var $elem_2 = $(".profile-content-2");

  if (!$elem_title.hasClass("start") && isElementInViewport($elem_title, 100)) {
    $elem_title.addClass("start");
  }

  if (!$elem_pic.hasClass("start") && isElementInViewport($elem_pic, 175)) {
    $elem_pic.addClass("start");
  }

  // if (!$elem_1.hasClass("start") && isElementInViewport($elem_1, 175)) {
  //   $elem_1.addClass("start");
  // }

  if (!$elem_2.hasClass("start") && isElementInViewport($elem_2, 175)) {
    $elem_2.addClass("start");
    $(".skillbars .skillbar > .row > .progress > .progress-bar").each(function(
      i
    ) {
      $(this).width(skills[i].value);
    });
  }
}

$(window).scroll(function() {
  startAnimation();
});
