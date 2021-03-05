import React, { Component } from "react";
import Home from "./pages/home";
import { Route } from "react-router-dom";
import Stats from "./pages/stats";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stats-engine">
          <Stats />
        </Route>
      </React.Fragment>
    );
  }
}

export default App;
