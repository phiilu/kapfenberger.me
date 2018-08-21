import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

import imageMPFilms from "../../images/mpfilms.png";
import imageeOberkellner from "../../images/oberkellner-franz.png";

import Wrapper from "../universal/Wrapper";

const Main = () => (
  <main>
    <section className="section-project">
      <Wrapper>
        <h1>Projects</h1>
        <h3>Here are some of my projects I did in my freetime</h3>
        <div className="projects">
          <div className="project-wrapper">
            <img src={imageMPFilms} alt="MP Films" />
            <div className="stack">
              <FontAwesomeIcon
                className="html"
                icon={["fab", "html5"]}
                size="lg"
              />
              <FontAwesomeIcon
                className="js"
                icon={["fab", "js-square"]}
                size="lg"
              />
              <FontAwesomeIcon
                className="css"
                icon={["fab", "css3"]}
                size="lg"
              />
            </div>
          </div>
          <div className="project-wrapper">
            <img src={imageeOberkellner} alt="Oberkellner Franz" />
            <div className="stack">
              <FontAwesomeIcon
                className="angular"
                icon={["fab", "angular"]}
                size="lg"
              />
              <FontAwesomeIcon
                className="js"
                icon={["fab", "js-square"]}
                size="lg"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
    <section>
      <Wrapper>
        <h1>Skills</h1>
      </Wrapper>
    </section>
    <section>
      <Wrapper>
        <h1>Open Source projects I find awesome</h1>
      </Wrapper>
    </section>
  </main>
);

export default Main;
