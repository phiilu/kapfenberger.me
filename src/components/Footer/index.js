import React from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Wrapper from "../universal/Wrapper";

const Footer = () => (
  <footer>
    <Wrapper>
      <div>&copy; {new Date().getFullYear()} Florian Kapfenberger</div>
      <div className="social">
        <a
          className="github"
          href="https://github.com/phiilu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
        </a>
        <a
          href="https://github.com/phiilu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
        </a>
        <a
          className="instagram"
          href="https://github.com/phiilu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
        </a>
        <a
          href="https://github.com/phiilu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "xing"]} size="lg" />
        </a>
        <a
          href="https://github.com/phiilu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
        </a>
      </div>
    </Wrapper>
  </footer>
);

export default Footer;
