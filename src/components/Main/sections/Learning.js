import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Wrapper from '../../universal/Wrapper'

import funFunFunctionImage from '../../../images/learning/funfunfunction.png'
import devTipsImage from '../../../images/learning/devtips.jpg'
import wesbosImage from '../../../images/learning/wesbos.jpg'
import eggheadImage from '../../../images/learning/egghead.io.png'
import freeCodeCampImage from '../../../images/learning/freecodecamp.jpg'
import learnCodeAcademyImage from '../../../images/learning/learncode.academy.jpg'
import leveluptutsImage from '../../../images/learning/leveluptuts.jpg'

const LearningSection = styled.section`
  background: rgb(246, 246, 246);
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
`

const Instructors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Instructor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
  transition: transform 0.3s ease;

  &:hover {
    color: #d90429;
  }

  & img {
    max-height: 156px;
    margin: 0.5em 1em;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  & span {
    font-size: 1.2em;
    font-weight: semi-bold;
  }

  @media (max-width: 750px) {
    & img {
      max-height: 100px;
    }
    & span {
      font-size: 1em;
    }
  }

  @media (max-width: 405px) {
    margin: 0;
    & img {
      max-height: 80px;
    }
    & span {
      display: none;
    }
  }
`

const instructors = [
  {
    name: 'FunFunFunction',
    image: funFunFunctionImage,
    url: 'https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q',
  },
  {
    name: 'Wes Bos',
    image: wesbosImage,
    url: 'https://wesbos.com/',
  },
  {
    name: 'DevTips',
    image: devTipsImage,
    url: 'https://www.youtube.com/user/DevTipsForDesigners/featured',
  },
  {
    name: 'egghead.io',
    image: eggheadImage,
    url: 'https://egghead.io/',
  },
  {
    name: 'freeCodeCamp.org',
    image: freeCodeCampImage,
    url: 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ',
  },
  {
    name: 'LearnCode.academy',
    image: learnCodeAcademyImage,
    url: 'https://www.youtube.com/user/learncodeacademy/featured',
  },
  {
    name: 'LevelUpTuts',
    image: leveluptutsImage,
    url: 'https://www.youtube.com/user/LevelUpTuts/featured',
  },
].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase())

const Learning = () => (
  <LearningSection id="always-learning">
    <Wrapper>
      <h1>Always Learning</h1>
      <h4>
        I like to stay up2date, this is why I always continue learning. <br />{' '}
        Here are some of my favourite online platforms and instructors that I
        trust and recommend:
      </h4>
      <Instructors>
        {instructors.map((instructor, i) => (
          <Instructor key={i}>
            <OutboundLink
              href={instructor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instructor.image} alt={instructor.name} />
            </OutboundLink>
            <span>{instructor.name}</span>
          </Instructor>
        ))}
      </Instructors>
    </Wrapper>
  </LearningSection>
)

export default Learning
