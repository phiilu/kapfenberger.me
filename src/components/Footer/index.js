import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Wrapper from '../universal/Wrapper'

const links = [
  {
    icon: ['fab', 'github'],
    url: 'https://github.com/phiilu',
  },
  {
    icon: ['fab', 'twitter'],
    url: 'https://twitter.com/phiilu',
  },
  {
    icon: ['fab', 'instagram'],
    url: 'https://instagram.com/phiilu',
  },
  {
    icon: ['fab', 'xing'],
    url: 'https://www.xing.com/profile/Florian_Kapfenberger',
  },
  {
    icon: ['fab', 'linkedin'],
    url: 'https://www.linkedin.com/in/florian-kapfenberger-59581b164/',
  },
]

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem 0;

  & div {
    margin: 20px 0;
  }
`

const SocialIcon = styled(OutboundLink)`
  text-decoration: none;
  margin: 0 5px;

  & > svg {
    color: #333;
    transition: color 0.1s ease-in-out;
  }

  &:hover > svg {
    color: #d90429;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <div>&copy; {new Date().getFullYear()} Florian Kapfenberger</div>
      <div>
        {links.map(link => (
          <SocialIcon
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link.icon} size="lg" />
          </SocialIcon>
        ))}
      </div>
    </Wrapper>
  </FooterWrapper>
)

export default Footer
