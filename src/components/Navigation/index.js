import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'

export default class Navigation extends Component {
  state = { show: false }

  render() {
    return (
      <nav>
        <div className="wrapper n1">
          <div className="main-nav">
            <a href="/" className="logo">
              F
            </a>
            <a href="/" className="logo-mobile">
              Florian Kapfenberger
            </a>
            <FontAwesomeIcon
              className="icon"
              icon="bars"
              size="lg"
              onClick={() => this.setState({ show: !this.state.show })}
            />
            <div className="wide-menu">
              <a href="#get-to-know-me">Get To Know Me</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#github-activity">GitHub Activity</a>
              <a href="#always-learning">Always Learning</a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
        <div className={`menu ${this.state.show ? 'show' : ''}`}>
          <div className="wrapper flex-menu">
            <a
              href="#get-to-know-me"
              onClick={() => this.setState({ show: false })}
            >
              Get To Know Me
            </a>
            <a href="#portfolio" onClick={() => this.setState({ show: false })}>
              Portfolio
            </a>
            <a
              href="#github-activity"
              onClick={() => this.setState({ show: false })}
            >
              GitHub Activity
            </a>
            <a href="#contact" onClick={() => this.setState({ show: false })}>
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
