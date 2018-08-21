import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

import imageMPFilms from "../../images/mpfilms.png";
import imageeOberkellner from "../../images/oberkellner-franz.png";

import Wrapper from "../universal/Wrapper";

const Main = () => (
  <main>
    <section className="about-me">
      <Wrapper>
        <h1>Get To Know Me</h1>
        <div className="left">
          <p>
            I started learning coding in 2010 and since then I programmed with
            several languages like C, Java, PHP, Ruby and JavaScript.
          </p>
          <p>
            Through the years I found out that developing websites and webapps
            is my truly passion. My prefered framework for creating websites is
            React. I started learning React in 2015 and since than I liked to
            work with it.
          </p>
          <h3>Activities I like to do</h3>
          <p>
            Besides coding I like to play various games like Hearthstone and
            Rocket League. Music is everything to me, I listen to music every
            single day. If I like a song I sometimes learn to play it on my
            guitar. On rainy days (or not so rainy :P) I also like watching
            movies and TV shows on Netflix. To stay in shape I like to do
            Freeletics workouts and go running.
          </p>
        </div>
        <div className="right" />
      </Wrapper>
    </section>
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
        <h1>Open Source projects I find awesome</h1>
      </Wrapper>
    </section>
  </main>
);

export default Main;
