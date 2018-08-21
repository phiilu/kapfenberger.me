import React, { Component } from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
