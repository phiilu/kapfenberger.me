import React from "react";
import "./index.css";

import Wrapper from "../universal/Wrapper";

const Navigation = () => (
  <nav>
    <Wrapper>
      <a href="#logo">Logo</a>
      <div className="menu">
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#Awesome_OSS">Awesome OSS</a>
      </div>
    </Wrapper>
  </nav>
);

export default Navigation;
