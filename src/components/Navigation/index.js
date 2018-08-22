import React from "react";
import "./index.css";

import Wrapper from "../universal/Wrapper";

const Navigation = () => (
  <nav>
    <Wrapper>
      <a href="#logo"><span className="logo">F</span></a>
      <div className="menu">
        <a href="#Projects">Get To Know Me</a>
        <a href="#Skills">Portfolio</a>
        <a href="#Awesome_OSS">OSS Activity</a>
      </div>
    </Wrapper>
  </nav>
);

export default Navigation;
