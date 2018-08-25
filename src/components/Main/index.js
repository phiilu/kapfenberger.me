import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import "./index.css";

import imageLogoWaffle from "../../images/logo-waffle.png";

import imageMPFilms from "../../images/portfolio/MPFilms.at.png";
import imageOberkellner from "../../images/portfolio/Oberkellner-Franz.png";
import imageSteinnacher from "../../images/portfolio/Steinnacher.at.png";
import imageMailman from "../../images/portfolio/Mailman.png";

import Wrapper from "../universal/Wrapper";
import GithubStars from "./GithubStars";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 1rem 10px;
  position: relative;
  z-index: 10;
  transition: all 0.4s ease-in-out;

  &:hover {
    z-index: 11;
    transform: scale(1.18);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  & .info {
    padding: 10px;
    background: white;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .info .stack > svg {
    margin: 0 5px;
  }

  & .info .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .info .links > a {
    margin: 0 5px;
  }
`;

const PortfolioBackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BackgroundColorMPFilms = styled(PortfolioBackgroundColor)`
  background-color: lightgreen;
`;

const BackgroundColorOberkellner = styled(PortfolioBackgroundColor)`
  background-color: #4f9ef1;
`;

const BackgroundColorSteinnacher = styled(PortfolioBackgroundColor)`
  background-color: antiquewhite;
`;

const BackgroundColorMailman = styled(PortfolioBackgroundColor)`
  background-color: #ffc400;
`;

const PortfolioImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imageMPFilms});
  background-size: cover;
  z-index: 10;
`;

const ImageMPFilms = styled(PortfolioImage)`
  background-image: url(${imageMPFilms});
`;

const ImageOberkellner = styled(PortfolioImage)`
  background-image: url(${imageOberkellner});
`;

const ImageSteinnacher = styled(PortfolioImage)`
  background-image: url(${imageSteinnacher});
`;

const ImageMailman = styled(PortfolioImage)`
  background-image: url(${imageMailman});
`;

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
              My true passion is to create modern websites and webapps with
              state of the art technology. My prefered framework for creating
              websites these days, is React. I started learning React in 2016
              and since then I kept learning new tools, concepts and
              technologies evolving around React.
            </p>
            <h3>Not-Coding Activities</h3>
            <p>
              Besides coding I like to play video games and listening to music.
              If I like a song, I sometimes learn to play it on my guitar. On
              rainy days (or sunny days lol) I also like watching movies and TV
              shows on Netflix. I try to do more sports, so I train at least 3
              days a week with Freeletics workouts or go for a run.
            </p>
          </div>
          <div className="right">
            <img
              src={imageLogoWaffle}
              alt="A waffle shape built with cool software logos."
              title="A waffle shape built with cool software logos."
            />
          </div>
        </div>
      </Wrapper>
    </section>
    <section className="section-project">
      <Wrapper>
        <h1>Portfolio</h1>
        <h4>Here are some projects I worked on:</h4>
        <div className="projects">
          <ProjectWrapper>
            <BackgroundColorMPFilms />
            <ImageMPFilms />
            <div className="info">
              <div className="stack">
                <FontAwesomeIcon
                  className="html"
                  icon={["fab", "html5"]}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="css"
                  icon={["fab", "css3-alt"]}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="js"
                  icon={["fab", "js-square"]}
                  size="lg"
                />
              </div>
              <div className="links">
                <a
                  href="http://mpfilms.at"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <BackgroundColorOberkellner />
            <ImageOberkellner />
            <div className="info">
              <div className="stack">
                <FontAwesomeIcon
                  className="angular"
                  icon={["fab", "angular"]}
                  size="lg"
                />
              </div>
              <div className="links">
                <a
                  href="https://oberkellner-franz.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <BackgroundColorMailman />
            <ImageMailman />
            <div className="info">
              <div className="stack">
                <FontAwesomeIcon
                  className="react"
                  icon={["fab", "react"]}
                  size="lg"
                />
              </div>
              <div className="links">
                <a
                  href="https://github.com/phiilu/mailman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="github"
                    icon={["fab", "github"]}
                    size="lg"
                  />
                </a>
              </div>
            </div>
          </ProjectWrapper>
          <ProjectWrapper>
            <BackgroundColorSteinnacher />
            <ImageSteinnacher />
            <div className="info">
              <div className="stack">
                <FontAwesomeIcon
                  className="html"
                  icon={["fab", "html5"]}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="css"
                  icon={["fab", "css3-alt"]}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="js"
                  icon={["fab", "js-square"]}
                  size="lg"
                />
                <FontAwesomeIcon
                  className="php"
                  icon={["fab", "php"]}
                  size="lg"
                />
              </div>
              <div className="links">
                <a
                  href="http://Steinnacher.at"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon="external-link-alt" />
                </a>
              </div>
            </div>
          </ProjectWrapper>
        </div>
      </Wrapper>
    </section>
    <section className="section-oss-activity">
      <Wrapper>
        <h1>OSS Activity</h1>
        <h4>
          Seeing new Open Source Software others have built, makes me feel
          excited.
        </h4>
        <h4>Here are the latest six I starred on GitHub:</h4>
        <div>
          <GithubStars />
        </div>
        <p>See more on my <a href="https://github.com/phiilu?tab=stars" target="_blank"
          rel="noopener noreferrer" >GitHub</a></p>
      </Wrapper>
    </section>
  </main>
);

export default Main;
