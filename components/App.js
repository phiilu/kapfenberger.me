import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import PageWrapper from './PageWrapper';
import PageTitle from './PageTitle/';
import Box from './Box';
import Block from './Block';
import ProfileImageWrapper from './ProfileImageWrapper';
import ProfileImage from './ProfileImage';
import Text from './Text';
import Icons from './Icons';
import Link from './Link';
import Subtitle from './Subtitle';

import Highlight from './Highlight';

const theme = {
  background: 'url(/static/img/pattern.svg)',
  primary: 'cornflowerblue',
  fontFamily: 'Raleway, Helvetica'
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Head>
            <title>
              Florian Kapfenberger | Webdeveloper | IT-Security Student
            </title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Block>
            <ProfileImageWrapper>
              <ProfileImage src="/static/img/profile.jpg" alt="Ich" />
            </ProfileImageWrapper>
            <PageTitle center>FLORIAN KAPFENBERGER</PageTitle>
            <Box>
              <Text center>
                <Subtitle center>Hey Friend 👋</Subtitle>
              </Text>
              <Text center>
                My name is Florian, but you can call me Flo 😄
              </Text>
              <Text center>
                I like to develop frontends for web applications,
                but I also enjoy writing backend code too. I would probably say I am a
                {' '}
                <i>Fullstack Developer</i>
                , if I were asked what I do.
              </Text>
              <Text center>
                Currently I enjoy developing & learning <strong>
                  <Highlight
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    color="#F0DB4F"
                    target="_blank"
                  >
                    JavaScript
                  </Highlight>
                </strong>.
                Especially the{' '}
                <strong>
                  <Highlight
                    href="https://facebook.github.io/react/"
                    target="_blank"
                    color="#61DAFB"
                  >
                    React
                  </Highlight>
                </strong> Framework and its community.
              </Text>
              <Icons>
                <Link
                  href="https://github.com/phiilu"
                  target="_blank"
                  color="#24292E"
                >
                  <i className="fa fa-github" />
                </Link>
                <Link
                  href="https://twitter.com/phiilu"
                  target="_blank"
                  color="#5698D5"
                >
                  <i className="fa fa-twitter" />
                </Link>
                <Link href="https://www.instagram.com/phiilu/" target="_blank">
                  <i className="fa fa-instagram" />
                </Link>
                <Link
                  href="https://www.xing.com/profile/Florian_Kapfenberger"
                  target="_blank"
                  color="#007575"
                >
                  <i className="fa fa-xing" />
                </Link>
              </Icons>
            </Box>
          </Block>
        </PageWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
