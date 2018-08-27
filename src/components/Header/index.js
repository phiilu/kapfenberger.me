import React from "react";
import styled from "styled-components";

import imageMe from "../../images/me.jpg";
import Wrapper from "../universal/Wrapper";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  text-align: center;

  @media (max-width: 610px) {
    flex-direction: column;
  }
`;

const HeaderFigure = styled.figure`
  margin: 0 20px 0 0;
  width: 200px;
  height: 200px;

  & > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  @media (max-width: 610px) {
    margin: 0;
  }
`;

const HeaderIntroduction = styled.div`
  flex: 1;
  max-width: 500px;
  line-height: 1.7;

  & h3 {
    font-weight: normal;
  }
`;

const Header = () => (
  <Wrapper>
    <HeaderWrapper>
      <HeaderFigure>
        <img src={imageMe} alt="Profilbild" />
      </HeaderFigure>
      <HeaderIntroduction>
        <h1>What's up, I'm Flo!</h1>
        <h3>
          I am a software developer from Austria{" "}
          <span role="img" aria-label="Flag of Austria">
            🇦🇹
          </span>{" "}
          and very passionate about
          <strong> Frontend Development</strong>.
        </h3>
      </HeaderIntroduction>
    </HeaderWrapper>
  </Wrapper>
);

export default Header;
