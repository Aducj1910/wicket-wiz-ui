import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Stats from "./pages/stats";
import Donate from "./pages/donate";

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
        <Route exact path="/donate">
          <Donate />
        </Route>
      </React.Fragment>
    );
  }
}

export default App;
