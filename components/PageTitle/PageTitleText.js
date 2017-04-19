import styled from 'styled-components';

import PageTitleWrapper from './PageTitleWrapper';

const PageTitleText = styled.h1`
  color: ${props => props.theme.primary};
  border-bottom: ${props => `2px solid ${props.theme.primary}`};
  font-size: 2rem;
  padding: 0 0 0.5rem;
  margin: 2rem 0 0;
  text-align: ${props => props.center ? 'center' : 'left'};

  @media screen and (max-width: 415px) {
    font-size: 1.5rem;
  }
`;

export default PageTitleText;
