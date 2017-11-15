import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.theme.primary || '#B9C5D4'};
  margin: 0 0.25em;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${props => props.color ? props.color : 'black'};
  }
`;

export default Link;
