import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// #dab0fc light violet
// #70ffec light teal
// #87ceeb sky blue
// #1d809f sea blue

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
