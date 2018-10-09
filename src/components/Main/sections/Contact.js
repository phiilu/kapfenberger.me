import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Wrapper from "../../universal/Wrapper";

const ContactSection = styled.section``;

const ContactLink = styled.a`
  display: block;
  padding: 5rem 0;
  text-align: center;
  background: #d90429;
  color: white;
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    background: #ce0326;
  }

  & svg {
    margin-left: 10px;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
    padding: 2.5rem 0;
  }
  @media (max-width: 350px) {
    font-size: 1.3rem;
  }
`;

const Contact = () => (
  <ContactSection>
    <ContactLink
      id="contact"
      href="mailto:florian@kapfenberger.me?subject=Hey Flo!"
    >
      <Wrapper>
        florian@kapfenberger.me <FontAwesomeIcon icon="paper-plane" />
      </Wrapper>
    </ContactLink>
  </ContactSection>
);

export default Contact;
