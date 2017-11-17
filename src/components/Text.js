import styled from "styled-components";

const Text = styled.p`
  text-align: ${props => (props.center ? "center" : "left")};
  margin-top: 0.5rem;

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export default Text;
