import styled from 'styled-components';

const Text = styled.div`
  font-size: 1.2rem;
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-top: 0.5rem;
  line-height: 1.8;

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export default Text;
