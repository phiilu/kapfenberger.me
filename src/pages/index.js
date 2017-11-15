import React from "react";
import Helmet from "react-helmet";
import { Instagram, Github, Twitter } from "react-feather";
import { ThemeProvider } from "styled-components";

import PageWrapper from "../components/PageWrapper";
import PageTitle from "../components/PageTitle/";
import Box from "../components/Box";
import Block from "../components/Block";
import ProfileImageWrapper from "../components/ProfileImageWrapper";
import ProfileImage from "../components/ProfileImage";
import Text from "../components/Text";
import Icons from "../components/Icons";
import Link from "../components/Link";
import Subtitle from "../components/Subtitle";

import Highlight from "../components/Highlight";

import profile from "../img/profile.jpg";
import pattern from "../img/pattern.svg";

const theme = {
  background: `url(${pattern})`,
  primary: "cornflowerblue",
  fontFamily: "Raleway, Helvetica"
};

export default class Index extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Block>
            <ProfileImageWrapper>
              <ProfileImage src={profile} alt="Florian Kapfenberger Profile" />
            </ProfileImageWrapper>
            <PageTitle center>Florian Kapfenberger</PageTitle>
            <Box>
              <Text center>
                <Subtitle center>🔥 Welcome to my site 🔥</Subtitle>
              </Text>
              <Text center>
                My name is <strong>Florian</strong> and my passion is to develop
                frontend web applications, but I'm also interested in writing
                backend code too. People would say I am{" "}
                <i>Fullstack Developer</i>.
              </Text>
              <Text center>
                Currently I enjoy developing &amp; learning{" "}
                <strong>
                  <Highlight
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    color="#F0DB4F"
                    rel="noopener"
                    target="_blank"
                  >
                    JavaScript
                  </Highlight>
                </strong>, especially the{" "}
                <strong>
                  <Highlight
                    href="https://facebook.github.io/react/"
                    target="_blank"
                    color="#61DAFB"
                    rel="noopener"
                  >
                    React.js
                  </Highlight>
                </strong>{" "}
                Framework and it's ecosystem.
              </Text>
              <Icons>
                <Link
                  href="https://github.com/phiilu"
                  target="_blank"
                  color="#24292E"
                  rel="noopener"
                >
                  <Github />
                </Link>
                <Link
                  href="https://twitter.com/phiilu"
                  target="_blank"
                  rel="noopener"
                  color="#5698D5"
                >
                  <Twitter />
                </Link>
                <Link
                  href="https://www.instagram.com/phiilu/"
                  target="_blank"
                  rel="noopener"
                >
                  <Instagram />
                </Link>
              </Icons>
            </Box>
          </Block>
        </PageWrapper>
      </ThemeProvider>
    );
  }
}
