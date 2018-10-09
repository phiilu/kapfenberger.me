import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Wrapper from '../universal/Wrapper'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  text-align: center;

  @media (max-width: 610px) {
    flex-direction: column;
  }
`

const HeaderFigure = styled.figure`
  margin: 0 20px 0 0;
  width: 200px;

  @media (max-width: 610px) {
    margin: 0;
  }
`

const HeaderIntroduction = styled.div`
  flex: 1;
  max-width: 500px;
  line-height: 1.7;

  & h3 {
    font-weight: normal;
  }
`

const Header = ({ profileImage }) => (
  <Wrapper>
    <HeaderWrapper>
      <HeaderFigure>
        <Img
          style={{
            transition: 'all 1s ease-in-out',
            background: 'transparent',
            borderRadius: '5%',
          }}
          imgStyle={{
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '5%',
          }}
          sizes={profileImage.childImageSharp.sizes}
          alt="Profilbild"
          backgroundColor={false}
        />
      </HeaderFigure>
      <HeaderIntroduction>
        <h1>What's up, I'm Flo!</h1>
        <h3>
          I am a software developer from Austria{' '}
          <span role="img" aria-label="Flag of Austria">
            🇦🇹
          </span>{' '}
          and very passionate about
          <strong> Frontend Development</strong>.
        </h3>
      </HeaderIntroduction>
    </HeaderWrapper>
  </Wrapper>
)

export default Header
