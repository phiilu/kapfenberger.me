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

console.log(
  "If you want to see the code, you can find it on GitHub: https://github.com/phiilu/site :D"
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
