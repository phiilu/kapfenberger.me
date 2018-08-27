import React from "react";
import styled from "styled-components";

import Wrapper from "../../../universal/Wrapper";
import GithubStars from "./GithubStars";

const GithubActivitySection = styled.section`
  padding: 4rem 0;

  & h4 {
    text-align: center;
    font-weight: 300;
    font-size: 1.2em;
  }
`;

const GithubActivity = () => (
  <GithubActivitySection>
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
      <p>
        See more on my{" "}
        <a
          href="https://github.com/phiilu?tab=stars"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </Wrapper>
  </GithubActivitySection>
);

export default GithubActivity;
