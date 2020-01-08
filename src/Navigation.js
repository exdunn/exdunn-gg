import React, { Component } from "react";
import "./Navigation.css";
import $ from "jquery";

class Navigation extends Component {
  render() {
    const pages = ["home", "about", "portfolio"];
    const navLinks = pages.map((page, i) => {
      return (
        <a href={"#" + page} key={i}>
          {page}
        </a>
      );
    });

    return (
      <nav className="desk">
        <div className="nav-wrap">{navLinks}</div>
      </nav>
    );
  }
}

export default Navigation;

// NAV anchor
$(function() {
  // NAV POSITION
  var navPos = $("nav").position().top;
  var lastPos = 0;
  var lockTimer;

  $(window).on("scroll", function() {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;

    if (pos >= navPos + $("nav").height() && lastPos < pos) {
      $("nav").addClass("fixed");
    }
    if (pos < navPos && lastPos > pos) {
      $("nav").removeClass("fixed");
    }
    lastPos = pos;

    // Link Highlighting
    if (pos2 > $("#home").offset().top) {
      highlightLink("home");
    }
    if (pos2 > $("#about").offset().top) {
      highlightLink("about");
    }
    if (pos2 > $("#portfolio").offset().top) {
      highlightLink("portfolio");
    }

    // Prevent Hover on Scroll
    clearTimeout(lockTimer);
    if (!$("body").hasClass("disable-hover")) {
      $("body").addClass("disable-hover");
    }

    lockTimer = setTimeout(function() {
      $("body").removeClass("disable-hover");
    }, 500);
  });

  function highlightLink(anchor) {
    $("nav .active").removeClass("active");
    $("nav")
      .find('[dest="' + anchor + '"]')
      .addClass("active");
  }
});
