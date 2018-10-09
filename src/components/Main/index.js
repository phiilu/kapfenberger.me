import React from 'react'
import styled from 'styled-components'

import AboutMe from './sections/AboutMe'
import Portfolio from './sections/Portfolio'
import GithubActivity from './sections/GithubActivity'
import Contact from './sections/Contact'

const MainWrapper = styled.main`
  flex: 1;
  padding: 2.5rem 0;
  padding-bottom: 0;
  background: white;

  & h1,
  & h3 {
    text-align: center;
  }

  & h1::after {
    content: '';
    display: block;
    height: 4px;
    width: 25px;
    margin: 0 auto;
    margin-top: 5px;
    background: #ef233c;

    border-radius: 3px;
  }
`

const Main = ({ waffleImage }) => (
  <MainWrapper>
    <AboutMe waffleImage={waffleImage} />
    <Portfolio />
    <GithubActivity />
    <Contact />
  </MainWrapper>
)

export default Main
