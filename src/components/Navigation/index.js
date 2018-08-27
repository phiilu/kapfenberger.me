import React from "react";
import styled from "styled-components";

import Wrapper from "../universal/Wrapper";

const NavigationWrapper = styled.nav`
  padding: 20px;
  background: #d90429;
`;

const NavigationLogo = styled.span`
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 900;
  padding: 5px 12px;
  border: 2px solid white;
  border-radius: 100px;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: #edf2f4;
`;

const NavigationMenu = styled.div`
  display: flex;
  justify-content: space-between;

  & > a {
    margin: 0 20px;
  }

  & > a:last-child {
    margin: 0 0 0 20px;
  }
`;

const NavigationInner = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

const Navigation = () => (
  <NavigationWrapper>
    <NavigationInner>
      <NavigationLink>
        <NavigationLogo>F</NavigationLogo>
      </NavigationLink>
      <NavigationMenu>
        <NavigationLink href="#get-to-know-me">Get To Know Me</NavigationLink>
        <NavigationLink href="#portfolio">Portfolio</NavigationLink>
        <NavigationLink href="#github-activity">GitHub Activity</NavigationLink>
        <NavigationLink href="#contact">Contact Me</NavigationLink>
      </NavigationMenu>
    </NavigationInner>
  </NavigationWrapper>
);

export default Navigation;
