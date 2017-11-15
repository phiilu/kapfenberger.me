import styled from "styled-components";

const Subtitle = styled.h3`
  text-align: ${props => (props.center ? "center" : "left")};
`;

export default Subtitle;
