import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faStar,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faExternalLinkAlt, faStar, faPaperPlane);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
