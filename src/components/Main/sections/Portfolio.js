import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import imageMPFilms from "../../../images/portfolio/MPFilms.at.png";
import imageOberkellner from "../../../images/portfolio/Oberkellner-Franz.png";
import imageSteinnacher from "../../../images/portfolio/Steinnacher.at.png";
import imageMailman from "../../../images/portfolio/Mailman.png";

import Wrapper from "../../universal/Wrapper";

const PortfolioSection = styled.section`
  padding: 4rem;
  background: rgb(246, 246, 246);

  & h4 {
    text-align: center;
    font-weight: 300;
    font-size: 1.2em;
  }
`;

const PortfolioProjects = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

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
  background-color: ${props => props.color};
`;

const PortfolioImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  z-index: 10;
`;

const projects = [
  {
    name: "MPFilms",
    image: imageMPFilms,
    backgroundColor: "lightgreen",
    stack: [
      { icon: "html5", color: "#e34f26" },
      { icon: "css3-alt", color: "#2f77b8" },
      { icon: "js-square", color: "#f7df1e" }
    ],
    links: [{ icon: "external-link-alt", url: "http://mpfilms.at" }]
  },
  {
    name: "Oberkellner Franz",
    image: imageOberkellner,
    backgroundColor: "#4f9ef1",
    stack: [{ icon: "angular", color: "#cc2b39" }],
    links: [{ icon: "external-link-alt", url: "https://oberkellner-franz.at/" }]
  },
  {
    name: "Mailman",
    image: imageMailman,
    backgroundColor: "#ffc400",
    stack: [{ icon: "react", color: "#80d8f7" }],
    links: [
      { icon: "external-link-alt", url: "https://github.com/phiilu/mailman" }
    ]
  },
  {
    name: "Steinnacher.at",
    image: imageSteinnacher,
    backgroundColor: "antiquewhite",
    stack: [
      { icon: "html5", color: "#e34f26" },
      { icon: "css3-alt", color: "#2f77b8" },
      { icon: "js-square", color: "#f7df1e" },
      { icon: "php", color: "#777caf" }
    ],
    links: [{ icon: "external-link-alt", url: "http://steinnacher.at" }]
  }
];

const Portfolio = () => (
  <PortfolioSection>
    <Wrapper>
      <h1>Portfolio</h1>
      <h4>Here are some projects I worked on:</h4>
      <PortfolioProjects>
        {projects.map(project => (
          <ProjectWrapper key={project.name} title={project.name}>
            <PortfolioBackgroundColor color={project.backgroundColor} />
            <PortfolioImage image={project.image} />
            <div className="info">
              <div className="stack">
                {project.stack.map((technology, i) => (
                  <FontAwesomeIcon
                    key={i}
                    style={{ color: technology.color }}
                    icon={["fab", technology.icon]}
                    size="lg"
                  />
                ))}
              </div>
              <div className="links">
                {project.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      style={{ color: "#2b2d42" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </ProjectWrapper>
        ))}
      </PortfolioProjects>
    </Wrapper>
  </PortfolioSection>
);

export default Portfolio;
