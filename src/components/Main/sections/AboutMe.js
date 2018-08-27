import React from "react";
import styled from "styled-components";

import imageLogoWaffle from "../../../images/logo-waffle.png";
import Wrapper from "../../universal/Wrapper";
import Link from "../../universal/Link";

const AboutMeSection = styled.section`
  margin-bottom: 5rem;
`;

const AboutMeWrapper = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const AboutMeLeftContent = styled.div`
  width: 50%;

  & > h3 {
    font-family: "M PLUS Rounded 1c", sans-serif;
    text-align: left !important;
    margin: 2em 0 1em;
    color: #d90429;
  }

  & > p {
    line-height: 1.6;
    font-size: 1.2em;
    hyphens: auto;
  }

  @media (max-width: 820px) {
    width: 100%;

    & > p {
      font-size: 1.1em;
    }
  }
`;

const AboutMeRightContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > img {
    transform: rotate(5deg);
  }

  @media (max-width: 1015px) {
    justify-content: center;
  }

  @media (max-width: 820px) {
    width: 100%;
    height: 300px;
    justify-content: center;
    margin-top: 2rem;

    & > img {
      transform: none;
      height: 100%;
    }
  }
`;

const AboutMe = () => (
  <AboutMeSection id="get-to-know-me">
    <Wrapper>
      <h1>Get To Know Me</h1>
      <AboutMeWrapper>
        <AboutMeLeftContent>
          <p>
            I started learning coding in 2010 and since then I programmed with
            several languages like C, Java, PHP, Ruby and JavaScript.
          </p>
          <p>
            My true passion is to create modern websites and webapps with state
            of the art technology. My prefered framework for creating websites
            these days, is <Link to="https://reactjs.org/">React</Link>. I
            started learning React in 2016 and since then I kept learning new
            tools, concepts and technologies evolving around React.
          </p>
          <h3>Not-Coding Activities</h3>
          <p>
            Besides coding I like to play video games and listening to music. If
            I like a song, I sometimes learn to play it on my guitar. On rainy
            days (or sunny ones{" "}
            <span role="img" aria-label="laughing with a bit of shame">
              😅
            </span>
            ) I also like watching movies and TV shows on Netflix. I try to do
            more sports, so I train at least 3 days a week with{" "}
            <Link to="https://www.freeletics.com/">Freeletics</Link> workouts or
            go for a run.
          </p>
        </AboutMeLeftContent>
        <AboutMeRightContent>
          <img
            src={imageLogoWaffle}
            alt="A waffle shape built with cool software logos."
            title="A waffle shape built with cool software logos."
          />
        </AboutMeRightContent>
      </AboutMeWrapper>
    </Wrapper>
  </AboutMeSection>
);

export default AboutMe;
