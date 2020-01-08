import Pantheon from "../res/pantheon.jpg";
import Notes from "../res/notes.jpg";
import Tree from "../res/tree.jpg";
import Cinema from "../res/cinema.jpg";
import ExaltLadderDemo from "../res/exalt ladder.gif";
import FabFlixDemo from "../res/fabflix.gif";
import PatchNotesWhenDemo from "../res/patch notes when.gif";
import TrieHuggerDemo from "../res/trie hugger.gif";

export const projects = [
  {
    title: "Patch Notes When",
    backgroundImage: `url(${Notes})`,
    attributes: ["React", "Node", "MongoDb", "GCP", "Beautiful Soup"],
    description:
      "Responsive, mobile-friendly website which hosts up to date announcements and patch notes posted on the Path of Exile website.",
    demo: PatchNotesWhenDemo,
    sourceUrl: "https://github.com/exdunn/patchnoteswhen",
    visitUrl: "https://www.patchnoteswhen.com"
  },
  {
    title: "Trie Hugger",
    backgroundImage: `url(${Tree})`,
    attributes: ["React", "D3Js", "Bootstrap", "Netlify"],
    description:
      "Animated, interactive application which builds a trie data structure out of randomly generated text. Uses the D3 JavaScript library to visualize the trie as either a tree or pack.",
    demo: TrieHuggerDemo,
    sourceUrl: "https://github.com/exdunn/trie-hugger",
    visitUrl: "https://unruffled-hugle-5470e0.netlify.com/"
  },
  {
    title: "Exalt Ladder",
    backgroundImage: `url(${Pantheon})`,
    attributes: ["React", "Node", "Path of Exile API"],
    demo: ExaltLadderDemo,
    description:
      "Website displaying character information for Path of Exile players.  Supports sorting and filtering by a variety attributes such as character level, class, ascendancy class, ladder, etc."
  },
  {
    title: "FabFlix",
    backgroundImage: `url(${Cinema})`,
    attributes: ["Java Servlet", "AWS", "MySql", "Tomcat"],
    sourceUrl: "https://github.com/exdunn/Fabflix_62",
    demo: FabFlixDemo,
    description:
      "Movie browsing website connected to a database of thousands of movies.  Features user login and purchasing using a cart system."
  }
];

export const skills = [
  { name: "JavaScript", value: "80%" },
  { name: "Python", value: "80%" },
  { name: "C# + VB.Net", value: "80%" },
  { name: "React", value: "75%" },
  { name: "Bootstrap + CSS", value: "70%" },
  { name: "Node", value: "60%" },
  { name: "MongoDB", value: "60%" }
];

export const icons = [
  {
    image: "fab fa-github",
    link: "https://github.com/exdunn",
    title: "Collaborative"
  },
  {
    image: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/alex-dunn-46766554/",
    title: "Connected"
  },
  {
    image: "far fa-file",
    link: "https://www.linkedin.com/in/alex-dunn-46766554/",

    title: "Experienced"
  }
];
