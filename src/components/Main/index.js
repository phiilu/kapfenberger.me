import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

import imageMPFilms from "../../images/mpfilms.png";
import imageOberkellner from "../../images/oberkellner-franz.png";
import imageLogoWaffle from "../../images/logo-waffle.png"

import Wrapper from "../universal/Wrapper";

const Main = () => (
  <main>
    <section className="about-me">

      <Wrapper>
        <h1>Get To Know Me</h1>
        <div className="about-me-wrapper">
          <div className="left">
            <p>
              I started learning coding in 2010 and since then I programmed with
              several languages like C, Java, PHP, Ruby and JavaScript.
          </p>
            <p>
              My true passion is to create modern websites and webapps with state of the art technology. My prefered framework for creating websites these days, is
              React. I started learning React in 2016 and since then I kept learning new tools, concepts and technologies evolving around React.
          </p>
            <h3>Not-Coding Activities</h3>
            <p>
              Besides coding I like to play video games and listening to music. If I like a song, I sometimes learn to play it on my
              guitar. On rainy days (or sunny days lol) I also like watching
              movies and TV shows on Netflix. I try to do more sports, so I train at least 3 days a week with Freeletics workouts or go for a run.
          </p>
          </div>
          <div className="right">
            <img src={imageLogoWaffle} alt="A waffle shape built with cool software logos." title="A waffle shape built with cool software logos." />
          </div>
        </div>
      </Wrapper>
    </section>
    <section className="section-project">
      <Wrapper>
        <h1>Portfolio</h1>
        <h4>Here are some projects I worked on:</h4>
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
            <img src={imageOberkellner} alt="Oberkellner Franz" />
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
        <h1>OSS Activity</h1>
        <h4>Seeing new Open Source Software others have built, makes me feel excited.</h4>
        <h4>Here are a few I consider awesome:</h4>
      </Wrapper>
    </section>
  </main>
);

export default Main;
