import React from "react";
import "./index.css";

import imageMe from "../../images/me.jpg";
import Wrapper from "../universal/Wrapper";

const Header = () => (
  <Wrapper>
    <header>
      <figure>
        <img src={imageMe} alt="Profilbild" />
      </figure>
      <div className="introduction">
        <h1>What's up, I'm Flo!</h1>
        <h3>
          I am a software developer from Austria{" "}
          <span role="img" aria-label="Flag of Austria">
            🇦🇹
          </span>{" "}
          and very passionate about
          <strong> Frontend Development</strong>.
        </h3>
      </div>
    </header>
  </Wrapper >
);

export default Header;
