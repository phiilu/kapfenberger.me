import styled from 'styled-components'

const Highlight = styled.a`
  transition: color 0.3s ease-in-out;
  text-decoration: none;

  &:hover, &:active, &:visited, &:link {
    color: ${props => props.color};
  }
`

export default Highlight;
