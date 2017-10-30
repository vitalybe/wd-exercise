import "semantic-ui-css/semantic.min.css";

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainContainer from './components/mainContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <MainContainer />
      </Router>
    );
  }
}


export default App;
