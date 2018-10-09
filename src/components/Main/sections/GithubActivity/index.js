import React from "react";
import styled from "styled-components";

import Wrapper from "../../../universal/Wrapper";
import Link from "../../../universal/Link";
import GithubStars from "./GithubStars";

const GithubActivitySection = styled.section`
  padding: 4rem 0;

  & h4 {
    text-align: center;
    font-weight: 300;
    font-size: 1.2em;
    line-height: 2;
  }

  @media (max-width: 620px) {
    & h4 {
      font-size: 1.1em;
    }
  }

  @media (max-width: 400px) {
    & h4 {
      font-size: 1em;
    }
  }
`;

const SeeMore = styled.p`
  text-align: center;
`;

const GithubActivity = () => (
  <GithubActivitySection id="github-activity">
    <Wrapper>
      <h1>GitHub Activity</h1>
      <h4>
        Seeing cool Open Source projects others are building excites me. <br />{" "}
        Here are the latest projects I have starred on GitHub:
      </h4>
      <div>
        <GithubStars />
      </div>
      <SeeMore>
        See more on my{" "}
        <Link to="https://github.com/phiilu?tab=stars">GitHub</Link>
      </SeeMore>
    </Wrapper>
  </GithubActivitySection>
);

export default GithubActivity;
