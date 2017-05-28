import styled from 'styled-components';

const Block = styled.div`
  padding: 2rem;
  border: 1px solid white;
  border-radius: 5%;
  background: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 415px) {
    padding: 0.5rem;
  }
`;

export default Block;
