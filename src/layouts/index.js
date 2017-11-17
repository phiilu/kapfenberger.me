import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <div>
        <Helmet
          title="Florian Kapfenberger"
          meta={[
            { name: "description", content: "Florian Kapfenberger's site" },
            {
              name: "keywords",
              content:
                "florian kapfenberger, fullstack, developer, webdeveloper, entwickler, hainfeld, programmierer, react, react.js, javascript"
            }
          ]}
        />
        <div>{this.props.children()}</div>
      </div>
    );
  }
}
